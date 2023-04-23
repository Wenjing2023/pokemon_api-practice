import React, { useState, useEffect } from "react";
const BucketList = ({ bucketList }) => {
  useEffect(() => {}, [bucketList.length]);

  return (
    <>
      <h3>You have {bucketList.length} pokemons</h3>
    </>
  );
};

export default BucketList;
