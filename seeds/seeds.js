const sequelize = require('../config/connection.js')
const { User, BlogPost, Comment } = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({ force:true})

    const user = await User.create({
        name: 'User One',
        password: 'pass321'
    });

    const blogPost1 = await BlogPost.create({
        title: 'Shovelin Snow',
        body_content: 'Just keep Shovelin',
        date_created: new Date(),
        author_id: user.id
    })

    const comment = await Comment.create({
        author_id: user.id,
        blogPostId: blogPost1.id,
        date_created: new Date(),
        content: 'You arent very good at shoveling'
    })

    console.log('Data seeded!')
};

seedDatabase();