import "../stylesheets/watch.css"

function Watch() {
    return (
        <div className="d-flex align-items-center flex-column border border-3 rounded-5 border-primary watch pt-4 pb-4 gap-5 shadow">
            <h1 className="text-dark lato-italy grand-l">React Relox</h1>
            <h2 className="text-primary-emphasis lato-bold grand">20:05</h2>
            <div className="d-flex justify-content-space-between gap-4">
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <h3 className="text-dark-emphasis lato-italy">Break Length</h3>
                    <div className="d-flex justify-content-center align-items-center gap-3">
                        <i className="bi bi-caret-down"></i>
                        <h3 className="text-dark-emphasis lato-bold m-0 p-0">5</h3>
                        <i className="bi bi-caret-up"></i>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <h3 className="text-dark-emphasis lato-italy">Session Length</h3>
                    <div className="d-flex justify-content-center align-items-center gap-3">
                        <i className="bi bi-caret-down"></i>
                        <h3 className="text-dark-emphasis lato-bold m-0 p-0">25:00</h3>
                        <i className="bi bi-caret-up"></i>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3">
                <i class="bi bi-play-circle fs-2"></i>
                <i class="bi bi-arrow-clockwise fs-2"></i>
            </div>
        </div>
    );
}

export default Watch;