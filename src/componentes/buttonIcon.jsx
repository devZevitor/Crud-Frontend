
    function ButtonIcon(props){
        return (
            <button {... props} className="bg-slate-400 text-white rounded-md">
                {props.children}
            </button> 
        )
    }

    export default ButtonIcon;