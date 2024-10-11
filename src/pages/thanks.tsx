import { Link } from "react-router-dom";
import AsynxWave from "../widgets/asynx_wave";
import { OrderEntity, StoreEntity } from "feeef";


export default function Thanks({ order, onDone }: {
    store: StoreEntity,
    order: OrderEntity, onDone: () => void
}) {
    return (
        <div
            className=""
        >
            <center>
                رقم الطلب #{order.id}
            </center>
            <div className="h-5"></div>
            <div className="relative">
                <h2 className="text-7xl flex">
                    <AsynxWave></AsynxWave>شكــــراً</h2>
                <h3>{order.customerName} تلقينا طلبك</h3>
            </div>
            <div className="my-2 h-[1px] line" />
            <div>
                <h3>سنتصل بك على <b>{order.customerPhone}</b></h3>
            </div>
            {/* <div className="flex text-[12px]"><h4 className="font-light">بدون توصيل</h4><div className="flex-grow"></div><div>{calculateLocalOrderTotal(store, order, false)}{getCurrencySymbolByStore(store)}</div></div> */}
            {/* <div className="flex text-[12px]"><h4 className=" font-light">مبلغ التوصيل</h4><div className="flex-grow"></div><div>{calculateLocalOrderShipping(store, order)}{getCurrencySymbolByStore(store)}</div></div> */}
            <div className="h-1"></div>
            {/* <div className="flex"><h4 className="text-sm font-light">المجموع</h4><div className="flex-grow"></div><div>{calculateLocalOrderTotal(store, order)}{getCurrencySymbolByStore(store)}</div></div> */}
            <div className="h-2"></div>
            <button 
                aria-label="إغلاق"
            type="button" className="w-full btn gb" onClick={onDone}>إغلاق</button>
            <div className="h-2"></div>
            <div className="p-2 bg-gray-100 text-center w-full pulse btn gb">
                <a 
                    aria-label="تتبع حالة الطلب"
                href={`https://feeef.app/track/${order.id}`} target="_blank" className="w-full text-blue-500">تتبع حالة الطلب</a>
            </div>
            <div className="h-2"></div>
            {/* https://forms.gle/ayjrFv1Do92ZoqnR6 survay */}
            <div className="p-2 bg-gray-100 text-center w-full pulse btn gb">
                <a 
                    aria-label="استطلاع الرضا"
                href="https://forms.gle/ayjrFv1Do92ZoqnR6" target="_blank" className="w-full text-green-500">
                    <div>شاركنا رأيك 😍</div>
                    {/* small text "هدايا عند اكمال التقييم" */}
                    <div className="text-xs">هدايا عند اكمال التقييم</div>
                </a>
            </div>
            {/* <Link to="/"><button
                aria-label="باقي المنتجات"
            type="button" className="w-full btn gb">باقي المنتجات</button></Link> */}
        </div>
    )
}