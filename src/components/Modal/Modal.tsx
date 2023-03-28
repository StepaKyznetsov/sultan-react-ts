import React, { ReactNode } from 'react';
import css from './Modal.module.scss';

interface IModal {
    children: ReactNode;
    visible: boolean;
    setVisible(state: boolean): void;
}

const Modal: React.FC<IModal> = ({children, visible, setVisible}) => {
    
    const rootClasses = [css.modal]

    if (visible) rootClasses.push(css.active)

    return(
        <div className = {rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className = {css.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
        
    )
}

export default Modal