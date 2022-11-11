export const task1 = {
  title: 'Виконати обчислення від’ємних елементів кожного рядку матриці',
  result: {
    type: 'image',
    value: 'https://i.imgur.com/7e8IPAI.png',
  },
  codeBlocks: [
    {
      id: 0,
      title: 'Підключення бібліотек та ініціалізація зміних',
      code: `    using System;
        using System.Threading;
        class Program
        {
            static int number = 10;
            static int[,] mas = new int[number, number];
            static Random rnd = new Random();
        
            public static void Main()
            {
                int i, j, workerThreads, portThreads;
                `,
      required: true,
    },
    {
      id: 1,
      title: 'Заповнення матриці випадковими числами, виведення на екран',
      code: `
                for (i = 0; i < number; i++)
                    for (j = 0; j < number; j++)
                        mas[i, j] = rnd.Next(-10, 10);
    
                for (i = 0; i < number; i++) {
                    for (j = 0; j < number; j++)
                    {
                        Console.Write(String.Format("{0,3}", mas[i, j]));
                    }
                    Console.WriteLine();
                }
                `,
      required: true,
    },
    {
      id: 2,
      title: 'Встановлення потоків',
      code: `
                Console.WriteLine("\nProcessor=" + Environment.ProcessorCount);
                ThreadPool.GetMaxThreads(out workerThreads, out portThreads);
                Console.WriteLine("\nMaximum worker threads: \t{0}" + "\nMaximum completion port threads: {1}",
                    workerThreads, portThreads);
                int MaxworkThreadsCount = 2 * Environment.ProcessorCount, MaxportThreadsCount = 2 * Environment.ProcessorCount;
                
                // Встановимо максимальну кількість робочих потоків
                ThreadPool.SetMaxThreads(MaxworkThreadsCount, MaxportThreadsCount);
    
                // Встановимо мінімальну кількість робочих потоків
                ThreadPool.SetMinThreads(MaxworkThreadsCount, MaxportThreadsCount);
                ThreadPool.GetMaxThreads(out workerThreads, out portThreads);
                Console.WriteLine("\nMaximum worker threads: \t{0}" + "\nMaximum completion port threads: {1}",
                    workerThreads, portThreads);
                    `,
      required: true,
    },
    {
      id: 3,
      title: 'Створення пулу потоків',
      code: `
                Console.WriteLine("\nstart time=" + DateTime.Now.Millisecond);
                for (i = 0; i < mas.GetLength(0); i++)
                {
                    ThreadPool.QueueUserWorkItem(Function, i);
                }
                Console.WriteLine("\nend time=" + DateTime.Now.Millisecond);
                Console.ReadLine();
            }
            `,
      required: true,
    },
    {
      id: 4,
      title: 'Функція обчислення елементів рядка матриці',
      code: `
            public static void Function(object instance)
            {
                int line = (int)instance, result = 1, i;
                for (i = 0; i < number; i++)
                {
                    if (mas[line, i] < 0)
                    {
                        result *= mas[line, i];
                    }
                }
                Thread.Sleep(500);
                Console.WriteLine("line number= " + (line + 1) + " result= " + result);
    
            }
        }
    `,
      required: true,
    },
  ],
}
