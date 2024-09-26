'use client'
import React from 'react'
import "./globals.css";

const ToggleSwitch = () => {

    const onChange = (value: boolean) => {
        const html = document.getElementById('themControl');
        if (!value) {
            html?.setAttribute("data-bs-theme", "light")
        } else {
            html?.setAttribute("data-bs-theme", "dark")
        }
    }
    return (
        <div>
            <label className='switch'>
                <input type="checkbox" onChange={(e) => onChange(e.target.checked)} aria-label="Toggle theme" />
                <span className='slider round'>
                    <i className="fs-5 bi bi-moon-stars-fill"></i>
                    <i className="fs-5 bi bi-sun"></i>
                </span>
            </label>
        </div>


    )
}

export default ToggleSwitch