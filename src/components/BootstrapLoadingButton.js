import React from 'react'
import { Button,Spinner } from 'react-bootstrap'

class BootstrapLoadingButton extends React.Component{

    render(){
        return(
            <div>
                <Button variant="success" disabled>
                    <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span>
                </Button>{' '}
                <Button variant="success" disabled>
                    <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    Loading...
                </Button>
            </div>
        )
    }
    
}

export default BootstrapLoadingButton;