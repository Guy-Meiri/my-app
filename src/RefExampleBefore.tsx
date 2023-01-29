import Form from './Form';

export default function RefExampleBefore() {
    return (
        <div className='flex'>
            <div className=' form flex'>
                <Form />
                <button> Submit</button>
            </div>
            <input placeholder='focus on me!' />
        </div>
    )
}
