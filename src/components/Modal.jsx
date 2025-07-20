export default function Modal({ onConfirm }) {
    return(<>
        <dialog id="dialog">
            <div box-="square" id="content">
                <p>Are you sure you want to delete this blog?</p>

                <div id="buttons">
                    <button onClick={() => document.querySelector("#dialog").close()} box-="square">Cancel</button>
                    <button onClick={onConfirm} box-="square">Delete</button>
                </div>
            </div>
        </dialog>
    </>)
}