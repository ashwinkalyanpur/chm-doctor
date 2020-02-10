import React from 'react';

import Aux from '../../hoc/Aux';
import './Layout.css';

const layout = ( props ) => (
    <Aux>
        <main className='ContainerFull'>
                <div className="row">
                <div className="LeftMenu"></div>
                <div className="Content">
                    {props.children}
                </div>
                </div>
        </main>
    </Aux>
);

export default layout;