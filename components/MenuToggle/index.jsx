import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../hooks/useDimensions";

// Components
import { ButtonToggle } from './components/ButtonToggle';

// Styles
import styles from './styles.module.scss';

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at  0px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(20px at 380px 30px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const MenuToggle = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
            <motion.div className={styles['background']} variants={sidebar}>
                <ButtonToggle toggle={() => toggleOpen()} />
            </motion.div>
            {/* <MenuToggle toggle={() => toggleOpen()} /> */}
        </motion.nav>
    );
};

MenuToggle.propTypes = {};

export default MenuToggle;