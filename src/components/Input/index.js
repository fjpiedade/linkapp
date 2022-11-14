import './index.css';

export function Input(props){
    return(
        <input 
        className='form-input' 
        //placeholder="Insert your value..." 
        {...props}
        />
    )
}