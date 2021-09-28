const Tiket = require('../models/tiket');
const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request-error');
const ForbiddenError = require('../errors/forbidden-error');

module.exports.getTikets = (req, res, next) => {
    Tiket.find({})
    .then((tikets) => {
      if (tikets.length === 0) {
        throw (new NotFoundError('Изображения отсутствуют.'));
      } else if (!tikets) {
        throw (new BadRequestError('Не удалось загрузить карточки'));
      }
      return res.send({ data: tikets });
    })
    .catch(next);
};

module.exports.createTiket = (req, res, next) => {
  const owner = req.user._id;
  const { message } = req.body;
  Tiket.create({ message, owner })
    .then((tiket) => {
      if (!tiket) {
        throw (new BadRequestError('Переданы некорректные данные при создании карточки.'));
      }
      return res.send({ data: tiket });
    })
    .catch(next);
};
