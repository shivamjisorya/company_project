// src/components/VideoSection.js
import React, { useState, useEffect, useRef } from 'react';
import FormSection from './FormSection';

const VideoSection = () => {
    const [showForm, setShowForm] = useState(false);
    const videoRef = useRef(null);

    const handleTimeUpdate = () => {
        if (videoRef.current.currentTime >= 40) {
            setShowForm(true);
            videoRef.current.pause(); 
            videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener('timeupdate', handleTimeUpdate);
        }

        return () => {
            if (video) {
                video.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    return (
        <div className="video-section">
            <video width="100%" controls ref={videoRef}>
                <source src="/large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {showForm && (
                <div className="form-container">
                    <FormSection />
                </div>
            )}
        </div>
    );
};

export default VideoSection;
