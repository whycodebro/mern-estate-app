import express from "express";

const test = (req, res) => {
  res.json({
    message: "hello ayush",
  });
};

export default test;
