"use strict";

const BanglaNaki = (likha) => {
  const shuru = 2433;
  const shesh = 2554;
  const faka = 32;
  if (likha === undefined || typeof likha !== "string") {
    throw new Error("invalid input");
  }

  return [...likha].every(function (borno) {
    const unicode = borno.charCodeAt(0);
    return (unicode >= shuru && unicode <= shesh) || unicode === faka;
  });
};

module.exports = BanglaNaki;
