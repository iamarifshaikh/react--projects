import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "../App.css";

export const Form = () => {
    
    const schema = yup.object().shape({
        fullName: yup.string().required("Your Fullname is required"),
        email: yup.string().email().required("This field is required!"),
        age: yup.number().positive().integer().min(18).required("This field is required!"),
        password: yup.string().min(8).max(64).required("This field is required!"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null],"Password Don't Match").required("You need to confirm a passwoxrd"),
    }) 

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>        
            <input type="text" name='fullName' placeholder="Full name..." {...register("fullName")} />
            <p>{ errors.fullName?.message}</p>
            <input type="text" name='email' placeholder="Email..." {...register("email")} />
            <p>{ errors.email?.message}</p>
            <input type="number" name='age' placeholder="Age..." {...register("age")} />
            <p>{ errors.age?.message}</p>
            <input type="password" name='password' placeholder="Password..." {...register("password")} />
            <p>{ errors.password?.message}</p>
            <input type="password" name='confirmPassword' placeholder="Confirm Password" {...register("confirmPassword")} />
            <p>{errors.confirmPassword?.message}</p>
            <div className='buttons'>
            <button type="submit">SUBMIT</button>
                <h3>OR</h3>
            <button type="reset">RESET</button>
            </div>
            </form>
        </div>
    )
}