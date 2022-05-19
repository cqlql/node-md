## 随机指定范围的整数

```c#
var rng = new Random();
// 大于或等于-20 小于55
Console.WriteLine(rng.Next(-20, 55));

// 大于或等于0 小于55
Console.WriteLine(rng.Next(55));
```

## 随机双精度浮点数

返回大于等于 0 小于 1 的随机浮点数

```c#
var rng = new Random();

Console.WriteLine(rng.NextDouble());
```

## 相关文档

[官方文档](https://docs.microsoft.com/zh-cn/dotnet/api/system.random?view=net-5.0)
