import React, {useState} from 'react';
import axios from 'axios';

const UserRequest = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subscriptionStatus   , setSubscriptionStatus] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const response = await axios.post(`/api/products/`, {name, email});

            if(response.status === 401) {
                setSubscriptionStatus('success');
            } else {
                setSubscriptionStatus('error');
            }
        } catch(error) {
            setSubscriptionStatus('error')
        }
    };



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Ім'я"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="email"
                    placeholder="Електронна пошта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Підписатися</button>
            </form>
            
            {subscriptionStatus === 'success' && (
                <div>
                    <p>{name}, Ви успішно підписалися!!!</p>
                </div>
            )}
            {subscriptionStatus === 'error' && (
                <div>
                    <p>Сталася помилка при підписці. Будь-ласка спробуйте ще</p>
                </div>
            )}

        </div>
  )
}

export default UserRequest