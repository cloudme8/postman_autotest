var jsonData = pm.response.json();
pm.collectionVariables.set("pokemon_id", jsonData.id);




pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Verify 'name' is 'Endor'", function () {
    const jsonData = pm.response.json(); 
    pm.expect(jsonData.name).to.eql("Obi-Wan Kenobi");
});

pm.test("Verify 'eye color' is 'blue-gray'", function () {
    const jsonData = pm.response.json(); 
    pm.expect(jsonData.eye_color).to.eql("blue-gray");
});

pm.test("Content-Type header is application/json", () => {
  pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');
});



pm.test("Verify 'name' is 'Endor'", function () {
    const jsonData = pm.response.json(); 
    pm.expect(jsonData.name).to.eql("Endor");
});
pm.test("Cookie JSESSIONID is present", () => {
  pm.expect(pm.cookies.has('JSESSIONID')).to.be.true;
});



pm.test ("Verify 'max atmosphering speed' is '1000'", function() {
      const jsonData = pm.response.json();
      pm.expect(jsonData.max_atmosphering_speed).to.eql("1000");
});


pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

