// var classes = ['A組','B組','C組','D組'];

// for (var grade = 1; grade < 4; grade++)
// {
//     for(var i = 0; i < classes.length; i++)
//     {
//         document.write('<p>' + grade + '年' + classes[i] + '</p>');
//     }
// }

var classes = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

for (var x = 0; x < classes.length; x++)
{
    for (var y = 0; y < classes.length; y++)
    {
        document.write('<p>' + classes[x] + classes[y] + '</p>');
    }
}