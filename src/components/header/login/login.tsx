interface LoginOpenOfProps {
    on: () => void,
    off: () => void
}

function Login({on,off}:LoginOpenOfProps) {
    return ( 
        <div onMouseEnter={on} onMouseOut={off}>
        a
        </div>
     );
}

export default Login;