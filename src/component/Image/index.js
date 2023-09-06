import { useState, forwardRef } from "react";
import images from "~/assets/images";
import classNames from "classnames";
import styles from './Image.module.scss'

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('')
    const handleError = () => {
        setFallback(customFallback)
    }
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img className={classNames(styles.wrapper, className)} ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />
})

export default Image;