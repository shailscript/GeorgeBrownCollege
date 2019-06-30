import React from "react";

const data = [
    {
        transactionHash: '0x1dd277f2990bc1df1de035551f1d232341e6b2cbc66618c779aa9d92af3d201e',
        block: '8012123',
        timestamp: '',
        from: '0xa4b9663aa59642a9c3a8bca87542abbf9462b213',
        to:	'0x0064454b14cddc990ed6520ef94d3e28fe7c41b6',
        value: '0.0080769',
        fee: '0.0000231',
    
    },
    {
        transactionHash: '0xe035551f1d2321dd277f2990bc1df1d341e6b2cbc66618c779aa9d92af3d201f',
        block: '8012123',
        timestamp: '',
        from: '0xa4b9663aa59642a9c3a8bca87542abbf9462b213',
        to:	'0x0064454b14cddc990ed6520ef94d3e28fe7c41b6',
        value: '0.0080769',
        fee: '0.0000231',
    
    }
];

const Layout = () => {
    return (
        <div>
            <p>App here</p>
            
            <div className="table-container">
                <div className="table-row header">
                    <div className="table-column">
                        <h3>Tx Hash</h3>
                    </div>
                    
                    <div className="table-column">
                        <h3>Block #</h3>
                    </div>
                    
                    <div className="table-column">
                        <h3>Age</h3>
                    </div>
                    
                    <div className="table-column">
                        <h3>From</h3>
                    </div>
                    
                    <div className="table-column">
                        <h3>To</h3>
                    </div>
                    
                    <div className="table-column">
                        <h3>Value</h3>
                    </div>
                    
                    <div className="table-column">
                        <h3>Fee</h3>
                    </div>
                </div>

                { data.map(transaction => 
                            (
                                <div className="table-row">
                                    <div className="table-column">
                                        <p>{ transaction.transactionHash }</p>
                                    </div>
                                    
                                    <div className="table-column">
                                        <p>{ transaction.block }</p>
                                    </div>
                                    
                                    <div className="table-column">
                                        <p>{ transaction.timestamp }</p>
                                    </div>
                                    
                                    <div className="table-column">
                                        <p>{ transaction.from }</p>
                                    </div>
                                    
                                    <div className="table-column">
                                        <p>{ transaction.to }</p>
                                    </div>
                                    
                                    <div className="table-column">
                                        <p>{ transaction.value }</p>
                                    </div>
                                    
                                    <div className="table-column">
                                        <p>{ transaction.fee }</p>
                                    </div>
                                </div>
                            )
                            
                ) }
            </div>
        </div>
    );
}

export default Layout;