export default function PageTemplate({ heading, children }) {
    return(<>
        <div box-="square" shear-="top" className="hero-container">
            <div>
                <span className="box-heading">{ heading }</span>
            </div>
            { children }
        </div>
    </>)
}