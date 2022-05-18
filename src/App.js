import React from 'react';
import faker from '@faker-js/faker';
import CommentDetail  from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {    
    return (
        <>
            <div className="ui container comments">
                <ApprovalCard>
                    Different type of content!!
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail 
                        firstname={faker.name.firstName()} 
                        avatar={faker.image.avatar()} 
                        comment={faker.lorem.words(faker.random.numeric())}
                        postedAt="some time here" />
                </ApprovalCard>
                
                <ApprovalCard>
                    <CommentDetail 
                        firstname={faker.name.firstName()} 
                        avatar={faker.image.avatar()} 
                        comment={faker.lorem.words(faker.random.numeric())}
                        postedAt="some time here" />
                </ApprovalCard>
            </div>
        </>
    );
}

export default App;