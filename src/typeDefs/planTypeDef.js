const [gql] = require(apollo - server);

const plantypes = gql`
  type Plan {}
  extend type Query {}
  type Mutation{
     
    }
 `;
module.exports = plantypes;
