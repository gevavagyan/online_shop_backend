const registration = async (req, res) => {
  try {
    console.log('req.body ===', req.body.user, 'controller');
    res.send('success');
  } catch (e) {
    console.log(e)
  }
};

module.exports = {
  registration
}
