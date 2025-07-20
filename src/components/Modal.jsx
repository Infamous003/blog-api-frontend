export default function Modal({ onConfirm }) {
    return(<>
        <dialog id="dialog" className="dialog">
            <div box-="square" id="content">
                <p>Are you sure you want to delete this blog?</p>

                <div className="btns-container">
                    <button onClick={() => document.querySelector("#dialog").close()}
                            className="dialog-cancel-btn"
                            size-="small">Cancel</button>
                    <button onClick={onConfirm}
                            // box-="square"
                            size-="small"
                            className="dialog-delete-btn">Delete</button>
                </div>
            </div>
        </dialog>
    </>)
}