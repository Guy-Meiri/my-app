import Form from './Form';

export default function RefExampleBefore() {
    return (
        <div className='flex-form'>
            <div className=' form flex-form'>
                <Form />
                <button> Submit</button>
            </div>
            <input placeholder='focus on me!' />
        </div>
    )
}
