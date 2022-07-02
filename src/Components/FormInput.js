function FormInput ({title, type, placeholder, value, setValue }) {
	return (
		<>
		    <label className="xxx" htmlFor={type}>
			    <div className="inputContent">
				   <span></span>
					<div className="inputBox">
					    <label >{title}</label>
					    <input type={type} id={type} value={value} placeholder={placeholder} onChange={ e => setValue(value = e.target.value)}/>
					</div>
				</div>
			</label>
		</>	
	)
};


export default FormInput;