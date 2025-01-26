const objectLiteralWithFunction = {
    first: "I",
    second: "am",
    third: "an",
    fourth: "object",
    fifth: function () {
      console.log("With a function");
    },
  };
  objectLiteralWithFunction.fifth();