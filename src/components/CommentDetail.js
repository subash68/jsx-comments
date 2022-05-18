import React from 'react';
import faker from '@faker-js/faker';

const CommentDetail = () => {
    return (
        <>
            <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={faker.image.avatar()} />
                    </a>
                    <div className="content">
                        <a href='/' className="author">
                            {faker.name.firstName()}
                        </a>
                        <div className="metadata">
                            <span className="date">Total at 6:00 PM</span>
                        </div>

                        <div className='text'>
                            {faker.lorem.words(faker.random.numeric())}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default CommentDetail;