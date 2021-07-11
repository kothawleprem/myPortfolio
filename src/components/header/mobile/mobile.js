import React from 'react'
import './mobile.css'

function Mobile({isOpen,setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <i class="fi-rr-cross-circle"></i>
            </div>
            
            <div className="mobile-option">
                <a href="#skill">
                    <i class="fi-rr-book-alt option-icon"></i>Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#project">
                    <i class="fi-rr-laptop option-icon"></i>Projects
                </a>
            </div>
        </div>
        
    )
}

export default Mobile
