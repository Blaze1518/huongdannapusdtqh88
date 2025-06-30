const Divider = () => (
    <div
        className="relative w-full h-[30px] my-1"
        style={{
            opacity: 0.8,
            mixBlendMode: "color-dodge",
            transform: "scaleY(-1)", // tương đương matrix(1,0,0,-1,0,0)
        }}
    >
        <img
            src="/path/to/light long yellow.png"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 w-[400px] h-full object-contain pointer-events-none select-none"
            draggable={false}
        />
    </div>
);

export default Divider;