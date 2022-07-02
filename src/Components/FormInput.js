function FormInput ({title, type, value, setValue }) {
	return (
		<>
		    <label htmlFor={title}>
			    <div className="inputContent">
				   <span></span>
					<div className="inputBox">
					    <label>{title}</label>
					    <input type={type} id={title} value={value} onChange={ e => setValue(value = e.target.value)}/>
					</div>
				</div>
			</label>
		</>	
	)
};


export default FormInput;