import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormSection = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', query: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = {};
        if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address';
        if (!validatePhone(formData.phone)) newErrors.phone = 'Invalid phone number';
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        setErrors({});
        setLoading(true);

        try {
            const response = await fetch('http://localhost:4000/send_mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitSuccess(true);
                navigate('/thank-you');
            } else {
                setSubmitSuccess(false);
                const errorMessage = await response.text();
                console.error('Error:', errorMessage);
                alert('Error sending email: ' + errorMessage);
            }
        } catch (error) {
            setSubmitSuccess(false);
            console.error('Error:', error);
            alert('Error sending email.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
                {errors.phone && <div className="text-danger">{errors.phone}</div>}
            </div>
            <div className="mb-3">
                <textarea
                    name="query"
                    placeholder="Your Query"
                    value={formData.query}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
            {submitSuccess === true && <div className="text-success mt-3">Email sent successfully!</div>}
            {submitSuccess === false && <div className="text-danger mt-3">Failed to send email.</div>}
        </form>
    );
};

export default FormSection;
