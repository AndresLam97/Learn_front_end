gloValue = 1000;

function test()
{
    window.value = 200;
    alert("This is an alert message");
}

function test1(variable)
{
    alert(variable*variable*variable);
}

function test2(name,age,address)
{
    this.name = name;
    this.age = age;
    this.address = address;
}