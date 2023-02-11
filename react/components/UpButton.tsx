import React from 'react'
import PropTypes from 'prop-types'
import { useCssHandles } from 'vtex.css-handles'
import ScrollToTop from 'react-scroll-to-top'

import './styles.css'


const UpButton = () => {
    const CSS_HANDLES = ['up-button']
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <div>
            <ScrollToTop
                color="white"
                height="10"
                svgPath=""
                smooth
                className={handles['up-button']}
            />
        </div>
    )
}


UpButton.propTypes = {
    icon: PropTypes.string.isRequired,
}

UpButton.defaultProps = {
    icon: 'mi-icono.png',
}

UpButton.schema = {
    title: 'Boton que se desliza hacia arria - UP',
    type: 'object',
    properties: {
        icon: {
            title: 'icon que se relacione con el store theme',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            },
        },

        width: {
            title: 'Ancho',
            description: 'Ancho de medida',
            type: 'number',
        },
        heigth: {
            title: 'Altura',
            description: 'Altura de medida',
            type: 'number',
        },
    },
}

export default UpButton

