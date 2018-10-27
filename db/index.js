const { Pool } = require('pg');

const pool = new Pool ({
  connectionString: postgres://adamkendis@127.0.0.1:5432/hs_listingdetail
});