'use strict';

/* istanbul ignore file */
module.exports = function native(offset, size) {
  var buffer = Buffer.alloc(size);
  this.db.copy(buffer, 0, offset, offset + size);

  var integer = BigInt(0); // eslint-disable-line no-undef

  var numberOfLongs = size / 4;
  for (var i = 0; i < numberOfLongs; i++) {
    integer =
      integer * BigInt(4294967296) + BigInt(buffer.readUInt32BE(i << 2, true)); // eslint-disable-line no-undef
  }

  return integer.toString();
};
