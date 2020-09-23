function PT_bac2()
{
    var a, b, c, delta, x, x1, x2;
    a = document.nhap.a.value;
    b = document.nhap.b.value;
    c = document.nhap.c.value;
    delta = b*b - 4*a*c;
    if (delta < 0)
    {
        alert(" Phương trình vô nghiệm ");
    }
    else if (delta ==0)
    {
        x = -b/2*a;
        document.nhap.f.value =x;
    }
    else if (delta > 0)
    {
        x1 = (-b + Math.sqrt(delta))/(2*a);
        document.nhap.d.value =x1;
        x2 = (-b - Math.sqrt(delta))/(2*a);
        document.nhap.e.value =x2;
    }
}
