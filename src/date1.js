export function Date1 (){
  var showdate = new Date();
  // var displaytidaysdate = showdate.getDate() + showdate.getMonth + showdate.getFullYear;
  var dt = showdate.toLocaleDateString() 


  return (
    <div>
     {dt}

    </div>
  );
};
