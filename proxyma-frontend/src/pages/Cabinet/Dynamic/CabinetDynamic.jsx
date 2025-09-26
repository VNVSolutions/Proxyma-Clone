import Container from "../../../components/utils/Container/Container.jsx";
import {useState,useMemo} from "react";


/** Утиліти */
const toNumber = (str) => Number(String(str).replace(/[^\d.]/g, "")) || 0;
const getPerGb = (priceStr, trafficStr) => {
    const price = toNumber(priceStr);
    const gb = toNumber(trafficStr);
    if (!price || !gb) return "-";
    return (price / gb).toFixed(price / gb >= 10 ? 0 : 1);
};
const maskKey = (k) => (k ? k.slice(0, 6) + "…" + k.slice(-4) : "—");
const fmtDate = (iso) => (iso ? new Date(iso).toLocaleDateString() : "—");

/** Пілюля статусу */
function StatusPill({status}) {
    const map = {
        active: {cls: "pill--active", label: "Активен"},
        expired:{cls: "pill--expired", label: "Просрочен"},
        pending:{cls: "pill--pending", label: "В ожидании"},
    };
    const s = map[status] || map.pending;
    return <span className={`pill ${s.cls}`}>{s.label}</span>;
}

/** Картка активного пакета */
function MyPackageCard({pkg}) {
    return (
        <div className="card">
            <div className="card__head">
                <div className="card__title">
                    <span className="card__dot" />
                    <h3>{pkg.title}</h3>
                </div>
                <StatusPill status={pkg.status}/>
            </div>

            <div className="kv">
                <div className="kv__item">
                    <div className="kv__key">Ключ</div>
                    <div className="kv__val">{maskKey(pkg.package_key)}</div>
                </div>
                <div className="kv__item">
                    <div className="kv__key">Создан</div>
                    <div className="kv__val">{fmtDate(pkg.created_at)}</div>
                </div>
                <div className="kv__item">
                    <div className="kv__key">Истекает</div>
                    <div className="kv__val">{fmtDate(pkg.expired_at)}</div>
                </div>
                <div className="kv__item">
                    <div className="kv__key">Осталось дней</div>
                    <div className="kv__val">{pkg.days_left ?? "—"}</div>
                </div>
            </div>

            <div className="card__actions">
                <button className="btn btn--secondary">Подробнее</button>
                <button className="btn btn--primary">Продлить</button>
            </div>
        </div>
    );
}

/** Картка тарифу для покупки */
function TariffCard({t, onBuy}) {
    const perGb = useMemo(()=>getPerGb(t.price, t.traffik), [t.price, t.traffik]);
    return (
        <div className="plan">
            <div className="plan__inner">
                <h3 className="plan__title">{t.name}</h3>

                <div className="plan__line">
                    <span className="plan__key">Срок</span>
                    <span className="plan__val">1 месяц</span>
                </div>
                <div className="plan__line">
                    <span className="plan__key">Цена</span>
                    <span className="plan__val">{t.price.replace(" $", " $")}</span>
                </div>
                <div className="plan__line">
                    <span className="plan__key">За 1 Гб</span>
                    <span className="plan__val">{perGb === "-" ? "-" : `$${perGb}`}</span>
                </div>
                <div className="plan__line">
                    <span className="plan__key">Трафик</span>
                    <span className="plan__val">{t.traffik.replace(" GB"," Гб")}</span>
                </div>

                <input className="plan__promo" placeholder="Введите промокод"/>
                <button className="btn btn--primary btn--full" onClick={()=>onBuy?.(t)}>
                    КУПИТЬ
                </button>
            </div>
        </div>
    );
}

function EmptyState({onGoBuy}) {
    return (
        <div className="empty">
            <div className="empty__badge">!</div>
            <div>
                Нет активных планов.{" "}
                <a href="#" onClick={e=>{e.preventDefault(); onGoBuy?.();}} className="empty__link">
                    Купить сейчас и пользоваться
                </a>
            </div>
        </div>
    );
}

function Tabs({tab, setTab}) {
    return (
        <div className="tabs">
            <button
                onClick={()=>setTab("mine")}
                className={`tabs__btn ${tab==="mine" ? "is-active":""}`}
            >
                Мои пакеты
            </button>
            <button
                onClick={()=>setTab("buy")}
                className={`tabs__btn ${tab==="buy" ? "is-active":""}`}
            >
                Купить прокси
            </button>
        </div>
    );
}

function CabinetDynamic() {
    const [availablePackages] = useState([
        { "tariff_id": 1, "name": "Nebula Set",   "price": "30 $",  "traffik": "10 GB" },
        { "tariff_id": 2, "name": "Protostar Set","price": "78 $",  "traffik": "30 GB" },
        { "tariff_id": 3, "name": "Supernova Set","price": "160 $", "traffik": "80 GB" },
        { "tariff_id": 4, "name": "Pulsar Set",   "price": "272 $", "traffik": "160 GB"},
        { "tariff_id": 8, "name": "Startuna",     "price": "5 $",   "traffik": "1 GB"  },
    ]);

    const [userPackages] = useState([
        // залиш пусто щоб побачити "Нет активных планов"
        {
          "title": "Startuna",
          "status": "active",
          "package_key": "823d9e02b10c897f6e9a",
          "created_at": "2025-09-12T12:41:20.000000Z",
          "expired_at": "2025-10-22",
          "days_left": 27
        }
    ]);

    const [tab, setTab] = useState(userPackages?.length ? "mine" : "buy");
    const handleBuy = (t) => alert(`Купить: ${t.name}`);

    return (
        <section className="cabdyn">
            <Container>
                <Tabs tab={tab} setTab={setTab}/>
                {tab === "mine" && (
                    <div className="cabdyn__content">
                        {userPackages.length === 0 ? (
                            <EmptyState onGoBuy={()=>setTab("buy")} />
                        ) : (
                            <div className="grid grid--my">
                                {userPackages.map((p,i)=>(<MyPackageCard key={i} pkg={p}/>))}
                            </div>
                        )}
                    </div>
                )}

                {tab === "buy" && (
                    <div className="cabdyn__content">
                        <div className="grid grid--plans">
                            {availablePackages
                                .slice()
                                .sort((a,b)=>a.tariff_id-b.tariff_id)
                                .map(t => (<TariffCard key={t.tariff_id} t={t} onBuy={handleBuy}/>))}
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
}

export default CabinetDynamic;