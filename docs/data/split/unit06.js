window.JAVA_STUDY_SPLIT = window.JAVA_STUDY_SPLIT || {};
window.JAVA_STUDY_SPLIT['unit06'] = [
  {
    "id": "unit06-001",
    "number": 1,
    "title": "catch順序 #1",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { throw new RuntimeException(); }\n        catch (Exception e) { System.out.println(\"E\"); }\n        catch (RuntimeException e) { System.out.println(\"R\"); }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "E"
      },
      {
        "key": "B",
        "text": "R"
      },
      {
        "key": "C",
        "text": "ER"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。先にExceptionで捕捉すると、後続のRuntimeException catchは到達不能になります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：先にExceptionで捕捉すると、後続のRuntimeException catchは到達不能になります。",
        "誤答選択肢が誤りである理由：Aは誤りです。E は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。R は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。ER は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：catchはサブクラスからスーパークラスの順に並べます。",
        "試験での注意：広い例外型を先に書くと後続catchが無効になります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit06-002",
    "number": 2,
    "title": "try-with-resourcesのclose順 #2",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class R implements AutoCloseable {\n    String name; R(String n){ name = n; }\n    public void close(){ System.out.print(name); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        try (R a = new R(\"A\"); R b = new R(\"B\")) {\n            System.out.print(\"T\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "TAB"
      },
      {
        "key": "B",
        "text": "TBA"
      },
      {
        "key": "C",
        "text": "ABT"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。tryブロックのTの後、リソースは宣言と逆順にcloseされます。B、Aの順で表示されます。",
      "points": [
        "正解：B：TBA",
        "正解になる理由：tryブロックのTの後、リソースは宣言と逆順にcloseされます。B、Aの順で表示されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。TAB は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。ABT は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：try-with-resources対象はAutoCloseableを実装している必要があります。",
        "試験での注意：複数リソースは後に宣言したものから閉じます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "output"
    ]
  },
  {
    "id": "unit06-003",
    "number": 3,
    "title": "mainメソッドと起動引数 #3",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main red blue` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0] + \":\" + args.length);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "red:1"
      },
      {
        "key": "B",
        "text": "blue:2"
      },
      {
        "key": "C",
        "text": "red:2"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
      "points": [
        "正解：C：red:2",
        "正解になる理由：`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。red:1 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。blue:2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：起動引数にはクラス名は含まれません。`String[] args` と `String... args` はどちらも有効です。",
        "試験での注意：添字は0始まりですが、lengthは要素数です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "output"
    ]
  },
  {
    "id": "unit06-004",
    "number": 4,
    "title": "起動引数なし実行 #4",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String... args) {\n        System.out.println(args[0]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`args` 自体は通常nullではありません。空配列として渡されます。",
        "試験での注意：nullと空配列を混同しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit06-005",
    "number": 5,
    "title": "ArrayListのremove #5",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(1); list.add(2); list.add(3);\n        list.remove(1);\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[1, 3]"
      },
      {
        "key": "B",
        "text": "[2, 3]"
      },
      {
        "key": "C",
        "text": "[1, 2]"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
      "points": [
        "正解：A：[1, 3]",
        "正解になる理由：`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
        "誤答選択肢が誤りである理由：Bは誤りです。[2, 3] は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。[1, 2] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：ArrayListには `remove(int index)` と `remove(Object o)` があります。",
        "試験での注意：Integerリストではremoveのオーバーロード解決が狙われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "output"
    ]
  },
  {
    "id": "unit06-006",
    "number": 6,
    "title": "sealedクラスの許可 #6",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "sealed class A permits B {}\nfinal class B extends A {}\nclass C extends A {}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Bだけコンパイルエラー"
      },
      {
        "key": "C",
        "text": "Cだけコンパイルエラー"
      },
      {
        "key": "D",
        "text": "Aだけコンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。sealed class AはpermitsでBだけを許可しています。Cは許可されていないためコンパイルエラーです。",
      "points": [
        "正解：C：Cだけコンパイルエラー",
        "正解になる理由：sealed class AはpermitsでBだけを許可しています。Cは許可されていないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Bだけコンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。Aだけコンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：sealedの直接サブクラスはpermitsで許可され、かつfinal/sealed/non-sealedのいずれかが必要です。",
        "試験での注意：許可リストとサブクラス側の修飾子を両方確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit06-007",
    "number": 7,
    "title": "catchとfinally #7",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.print(\"A\");\n            int x = 10 / 0;\n            System.out.print(\"B\");\n        } catch (ArithmeticException e) {\n            System.out.print(\"C\");\n        } finally {\n            System.out.print(\"D\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ABCD"
      },
      {
        "key": "B",
        "text": "ACD"
      },
      {
        "key": "C",
        "text": "AD"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。A出力後に0除算でArithmeticExceptionが発生し、Bは実行されません。catchでC、finallyでDが出力されます。",
      "points": [
        "正解：B：ACD",
        "正解になる理由：A出力後に0除算でArithmeticExceptionが発生し、Bは実行されません。catchでC、finallyでDが出力されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。ABCD は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。AD は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：例外が発生するとtryブロックの残りはスキップされます。",
        "試験での注意：finallyは例外の有無にかかわらず基本的に実行されます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "output"
    ]
  },
  {
    "id": "unit06-008",
    "number": 8,
    "title": "catch順序 #8",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { throw new RuntimeException(); }\n        catch (Exception e) { System.out.println(\"E\"); }\n        catch (RuntimeException e) { System.out.println(\"R\"); }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "E"
      },
      {
        "key": "B",
        "text": "R"
      },
      {
        "key": "C",
        "text": "ER"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。先にExceptionで捕捉すると、後続のRuntimeException catchは到達不能になります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：先にExceptionで捕捉すると、後続のRuntimeException catchは到達不能になります。",
        "誤答選択肢が誤りである理由：Aは誤りです。E は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。R は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。ER は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：catchはサブクラスからスーパークラスの順に並べます。",
        "試験での注意：広い例外型を先に書くと後続catchが無効になります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit06-009",
    "number": 9,
    "title": "try-with-resourcesのclose順 #9",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class R implements AutoCloseable {\n    String name; R(String n){ name = n; }\n    public void close(){ System.out.print(name); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        try (R a = new R(\"A\"); R b = new R(\"B\")) {\n            System.out.print(\"T\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "TAB"
      },
      {
        "key": "B",
        "text": "TBA"
      },
      {
        "key": "C",
        "text": "ABT"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。tryブロックのTの後、リソースは宣言と逆順にcloseされます。B、Aの順で表示されます。",
      "points": [
        "正解：B：TBA",
        "正解になる理由：tryブロックのTの後、リソースは宣言と逆順にcloseされます。B、Aの順で表示されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。TAB は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。ABT は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：try-with-resources対象はAutoCloseableを実装している必要があります。",
        "試験での注意：複数リソースは後に宣言したものから閉じます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "output"
    ]
  },
  {
    "id": "unit06-010",
    "number": 10,
    "title": "mainメソッドと起動引数 #10",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main red blue` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0] + \":\" + args.length);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "red:1"
      },
      {
        "key": "B",
        "text": "blue:2"
      },
      {
        "key": "C",
        "text": "red:2"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
      "points": [
        "正解：C：red:2",
        "正解になる理由：`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。red:1 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。blue:2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：起動引数にはクラス名は含まれません。`String[] args` と `String... args` はどちらも有効です。",
        "試験での注意：添字は0始まりですが、lengthは要素数です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "output"
    ]
  },
  {
    "id": "unit06-011",
    "number": 11,
    "title": "起動引数なし実行 #11",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String... args) {\n        System.out.println(args[0]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`args` 自体は通常nullではありません。空配列として渡されます。",
        "試験での注意：nullと空配列を混同しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit06-012",
    "number": 12,
    "title": "ArrayListのremove #12",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(1); list.add(2); list.add(3);\n        list.remove(1);\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[1, 3]"
      },
      {
        "key": "B",
        "text": "[2, 3]"
      },
      {
        "key": "C",
        "text": "[1, 2]"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
      "points": [
        "正解：A：[1, 3]",
        "正解になる理由：`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
        "誤答選択肢が誤りである理由：Bは誤りです。[2, 3] は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。[1, 2] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：ArrayListには `remove(int index)` と `remove(Object o)` があります。",
        "試験での注意：Integerリストではremoveのオーバーロード解決が狙われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "output"
    ]
  },
  {
    "id": "unit06-013",
    "number": 13,
    "title": "sealedクラスの許可 #13",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "sealed class A permits B {}\nfinal class B extends A {}\nclass C extends A {}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Bだけコンパイルエラー"
      },
      {
        "key": "C",
        "text": "Cだけコンパイルエラー"
      },
      {
        "key": "D",
        "text": "Aだけコンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。sealed class AはpermitsでBだけを許可しています。Cは許可されていないためコンパイルエラーです。",
      "points": [
        "正解：C：Cだけコンパイルエラー",
        "正解になる理由：sealed class AはpermitsでBだけを許可しています。Cは許可されていないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Bだけコンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。Aだけコンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：sealedの直接サブクラスはpermitsで許可され、かつfinal/sealed/non-sealedのいずれかが必要です。",
        "試験での注意：許可リストとサブクラス側の修飾子を両方確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit06-014",
    "number": 14,
    "title": "catchとfinally #14",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.print(\"A\");\n            int x = 10 / 0;\n            System.out.print(\"B\");\n        } catch (ArithmeticException e) {\n            System.out.print(\"C\");\n        } finally {\n            System.out.print(\"D\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ABCD"
      },
      {
        "key": "B",
        "text": "ACD"
      },
      {
        "key": "C",
        "text": "AD"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。A出力後に0除算でArithmeticExceptionが発生し、Bは実行されません。catchでC、finallyでDが出力されます。",
      "points": [
        "正解：B：ACD",
        "正解になる理由：A出力後に0除算でArithmeticExceptionが発生し、Bは実行されません。catchでC、finallyでDが出力されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。ABCD は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。AD は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：例外が発生するとtryブロックの残りはスキップされます。",
        "試験での注意：finallyは例外の有無にかかわらず基本的に実行されます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "output"
    ]
  },
  {
    "id": "unit06-015",
    "number": 15,
    "title": "catch順序 #15",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { throw new RuntimeException(); }\n        catch (Exception e) { System.out.println(\"E\"); }\n        catch (RuntimeException e) { System.out.println(\"R\"); }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "E"
      },
      {
        "key": "B",
        "text": "R"
      },
      {
        "key": "C",
        "text": "ER"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。先にExceptionで捕捉すると、後続のRuntimeException catchは到達不能になります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：先にExceptionで捕捉すると、後続のRuntimeException catchは到達不能になります。",
        "誤答選択肢が誤りである理由：Aは誤りです。E は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。R は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。ER は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：catchはサブクラスからスーパークラスの順に並べます。",
        "試験での注意：広い例外型を先に書くと後続catchが無効になります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit06-016",
    "number": 16,
    "title": "try-with-resourcesのclose順 #16",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class R implements AutoCloseable {\n    String name; R(String n){ name = n; }\n    public void close(){ System.out.print(name); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        try (R a = new R(\"A\"); R b = new R(\"B\")) {\n            System.out.print(\"T\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "TAB"
      },
      {
        "key": "B",
        "text": "TBA"
      },
      {
        "key": "C",
        "text": "ABT"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。tryブロックのTの後、リソースは宣言と逆順にcloseされます。B、Aの順で表示されます。",
      "points": [
        "正解：B：TBA",
        "正解になる理由：tryブロックのTの後、リソースは宣言と逆順にcloseされます。B、Aの順で表示されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。TAB は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。ABT は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：try-with-resources対象はAutoCloseableを実装している必要があります。",
        "試験での注意：複数リソースは後に宣言したものから閉じます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "output"
    ]
  },
  {
    "id": "unit06-017",
    "number": 17,
    "title": "mainメソッドと起動引数 #17",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main red blue` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0] + \":\" + args.length);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "red:1"
      },
      {
        "key": "B",
        "text": "blue:2"
      },
      {
        "key": "C",
        "text": "red:2"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
      "points": [
        "正解：C：red:2",
        "正解になる理由：`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。red:1 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。blue:2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：起動引数にはクラス名は含まれません。`String[] args` と `String... args` はどちらも有効です。",
        "試験での注意：添字は0始まりですが、lengthは要素数です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "output"
    ]
  },
  {
    "id": "unit06-018",
    "number": 18,
    "title": "起動引数なし実行 #18",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String... args) {\n        System.out.println(args[0]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`args` 自体は通常nullではありません。空配列として渡されます。",
        "試験での注意：nullと空配列を混同しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit06-019",
    "number": 19,
    "title": "ArrayListのremove #19",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(1); list.add(2); list.add(3);\n        list.remove(1);\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[1, 3]"
      },
      {
        "key": "B",
        "text": "[2, 3]"
      },
      {
        "key": "C",
        "text": "[1, 2]"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
      "points": [
        "正解：A：[1, 3]",
        "正解になる理由：`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
        "誤答選択肢が誤りである理由：Bは誤りです。[2, 3] は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。[1, 2] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：ArrayListには `remove(int index)` と `remove(Object o)` があります。",
        "試験での注意：Integerリストではremoveのオーバーロード解決が狙われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "output"
    ]
  },
  {
    "id": "unit06-020",
    "number": 20,
    "title": "sealedクラスの許可 #20",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "sealed class A permits B {}\nfinal class B extends A {}\nclass C extends A {}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Bだけコンパイルエラー"
      },
      {
        "key": "C",
        "text": "Cだけコンパイルエラー"
      },
      {
        "key": "D",
        "text": "Aだけコンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。sealed class AはpermitsでBだけを許可しています。Cは許可されていないためコンパイルエラーです。",
      "points": [
        "正解：C：Cだけコンパイルエラー",
        "正解になる理由：sealed class AはpermitsでBだけを許可しています。Cは許可されていないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Bだけコンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。Aだけコンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：sealedの直接サブクラスはpermitsで許可され、かつfinal/sealed/non-sealedのいずれかが必要です。",
        "試験での注意：許可リストとサブクラス側の修飾子を両方確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit06-021",
    "number": 21,
    "title": "catchとfinally #21",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.print(\"A\");\n            int x = 10 / 0;\n            System.out.print(\"B\");\n        } catch (ArithmeticException e) {\n            System.out.print(\"C\");\n        } finally {\n            System.out.print(\"D\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ABCD"
      },
      {
        "key": "B",
        "text": "ACD"
      },
      {
        "key": "C",
        "text": "AD"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。A出力後に0除算でArithmeticExceptionが発生し、Bは実行されません。catchでC、finallyでDが出力されます。",
      "points": [
        "正解：B：ACD",
        "正解になる理由：A出力後に0除算でArithmeticExceptionが発生し、Bは実行されません。catchでC、finallyでDが出力されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。ABCD は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。AD は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：例外が発生するとtryブロックの残りはスキップされます。",
        "試験での注意：finallyは例外の有無にかかわらず基本的に実行されます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "output"
    ]
  },
  {
    "id": "unit06-022",
    "number": 22,
    "title": "catch順序 #22",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { throw new RuntimeException(); }\n        catch (Exception e) { System.out.println(\"E\"); }\n        catch (RuntimeException e) { System.out.println(\"R\"); }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "E"
      },
      {
        "key": "B",
        "text": "R"
      },
      {
        "key": "C",
        "text": "ER"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。先にExceptionで捕捉すると、後続のRuntimeException catchは到達不能になります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：先にExceptionで捕捉すると、後続のRuntimeException catchは到達不能になります。",
        "誤答選択肢が誤りである理由：Aは誤りです。E は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。R は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。ER は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：catchはサブクラスからスーパークラスの順に並べます。",
        "試験での注意：広い例外型を先に書くと後続catchが無効になります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit06-023",
    "number": 23,
    "title": "try-with-resourcesのclose順 #23",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class R implements AutoCloseable {\n    String name; R(String n){ name = n; }\n    public void close(){ System.out.print(name); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        try (R a = new R(\"A\"); R b = new R(\"B\")) {\n            System.out.print(\"T\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "TAB"
      },
      {
        "key": "B",
        "text": "TBA"
      },
      {
        "key": "C",
        "text": "ABT"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。tryブロックのTの後、リソースは宣言と逆順にcloseされます。B、Aの順で表示されます。",
      "points": [
        "正解：B：TBA",
        "正解になる理由：tryブロックのTの後、リソースは宣言と逆順にcloseされます。B、Aの順で表示されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。TAB は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。ABT は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：try-with-resources対象はAutoCloseableを実装している必要があります。",
        "試験での注意：複数リソースは後に宣言したものから閉じます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "output"
    ]
  },
  {
    "id": "unit06-024",
    "number": 24,
    "title": "mainメソッドと起動引数 #24",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main red blue` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0] + \":\" + args.length);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "red:1"
      },
      {
        "key": "B",
        "text": "blue:2"
      },
      {
        "key": "C",
        "text": "red:2"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
      "points": [
        "正解：C：red:2",
        "正解になる理由：`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。red:1 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。blue:2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：起動引数にはクラス名は含まれません。`String[] args` と `String... args` はどちらも有効です。",
        "試験での注意：添字は0始まりですが、lengthは要素数です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "output"
    ]
  },
  {
    "id": "unit06-025",
    "number": 25,
    "title": "起動引数なし実行 #25",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String... args) {\n        System.out.println(args[0]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`args` 自体は通常nullではありません。空配列として渡されます。",
        "試験での注意：nullと空配列を混同しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit06-026",
    "number": 26,
    "title": "ArrayListのremove #26",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(1); list.add(2); list.add(3);\n        list.remove(1);\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[1, 3]"
      },
      {
        "key": "B",
        "text": "[2, 3]"
      },
      {
        "key": "C",
        "text": "[1, 2]"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
      "points": [
        "正解：A：[1, 3]",
        "正解になる理由：`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
        "誤答選択肢が誤りである理由：Bは誤りです。[2, 3] は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。[1, 2] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：ArrayListには `remove(int index)` と `remove(Object o)` があります。",
        "試験での注意：Integerリストではremoveのオーバーロード解決が狙われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "output"
    ]
  },
  {
    "id": "unit06-027",
    "number": 27,
    "title": "sealedクラスの許可 #27",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "sealed class A permits B {}\nfinal class B extends A {}\nclass C extends A {}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Bだけコンパイルエラー"
      },
      {
        "key": "C",
        "text": "Cだけコンパイルエラー"
      },
      {
        "key": "D",
        "text": "Aだけコンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。sealed class AはpermitsでBだけを許可しています。Cは許可されていないためコンパイルエラーです。",
      "points": [
        "正解：C：Cだけコンパイルエラー",
        "正解になる理由：sealed class AはpermitsでBだけを許可しています。Cは許可されていないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Bだけコンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。Aだけコンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：sealedの直接サブクラスはpermitsで許可され、かつfinal/sealed/non-sealedのいずれかが必要です。",
        "試験での注意：許可リストとサブクラス側の修飾子を両方確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit06-028",
    "number": 28,
    "title": "catchとfinally #28",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.print(\"A\");\n            int x = 10 / 0;\n            System.out.print(\"B\");\n        } catch (ArithmeticException e) {\n            System.out.print(\"C\");\n        } finally {\n            System.out.print(\"D\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ABCD"
      },
      {
        "key": "B",
        "text": "ACD"
      },
      {
        "key": "C",
        "text": "AD"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。A出力後に0除算でArithmeticExceptionが発生し、Bは実行されません。catchでC、finallyでDが出力されます。",
      "points": [
        "正解：B：ACD",
        "正解になる理由：A出力後に0除算でArithmeticExceptionが発生し、Bは実行されません。catchでC、finallyでDが出力されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。ABCD は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。AD は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：例外が発生するとtryブロックの残りはスキップされます。",
        "試験での注意：finallyは例外の有無にかかわらず基本的に実行されます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "output"
    ]
  },
  {
    "id": "unit06-029",
    "number": 29,
    "title": "catch順序 #29",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { throw new RuntimeException(); }\n        catch (Exception e) { System.out.println(\"E\"); }\n        catch (RuntimeException e) { System.out.println(\"R\"); }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "E"
      },
      {
        "key": "B",
        "text": "R"
      },
      {
        "key": "C",
        "text": "ER"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。先にExceptionで捕捉すると、後続のRuntimeException catchは到達不能になります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：先にExceptionで捕捉すると、後続のRuntimeException catchは到達不能になります。",
        "誤答選択肢が誤りである理由：Aは誤りです。E は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。R は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。ER は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：catchはサブクラスからスーパークラスの順に並べます。",
        "試験での注意：広い例外型を先に書くと後続catchが無効になります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit06-030",
    "number": 30,
    "title": "try-with-resourcesのclose順 #30",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class R implements AutoCloseable {\n    String name; R(String n){ name = n; }\n    public void close(){ System.out.print(name); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        try (R a = new R(\"A\"); R b = new R(\"B\")) {\n            System.out.print(\"T\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "TAB"
      },
      {
        "key": "B",
        "text": "TBA"
      },
      {
        "key": "C",
        "text": "ABT"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。tryブロックのTの後、リソースは宣言と逆順にcloseされます。B、Aの順で表示されます。",
      "points": [
        "正解：B：TBA",
        "正解になる理由：tryブロックのTの後、リソースは宣言と逆順にcloseされます。B、Aの順で表示されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。TAB は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。ABT は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：try-with-resources対象はAutoCloseableを実装している必要があります。",
        "試験での注意：複数リソースは後に宣言したものから閉じます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "output"
    ]
  },
  {
    "id": "unit06-031",
    "number": 31,
    "title": "mainメソッドと起動引数 #31",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main red blue` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0] + \":\" + args.length);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "red:1"
      },
      {
        "key": "B",
        "text": "blue:2"
      },
      {
        "key": "C",
        "text": "red:2"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
      "points": [
        "正解：C：red:2",
        "正解になる理由：`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。red:1 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。blue:2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：起動引数にはクラス名は含まれません。`String[] args` と `String... args` はどちらも有効です。",
        "試験での注意：添字は0始まりですが、lengthは要素数です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "output"
    ]
  },
  {
    "id": "unit06-032",
    "number": 32,
    "title": "起動引数なし実行 #32",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String... args) {\n        System.out.println(args[0]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`args` 自体は通常nullではありません。空配列として渡されます。",
        "試験での注意：nullと空配列を混同しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit06-033",
    "number": 33,
    "title": "ArrayListのremove #33",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(1); list.add(2); list.add(3);\n        list.remove(1);\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[1, 3]"
      },
      {
        "key": "B",
        "text": "[2, 3]"
      },
      {
        "key": "C",
        "text": "[1, 2]"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
      "points": [
        "正解：A：[1, 3]",
        "正解になる理由：`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
        "誤答選択肢が誤りである理由：Bは誤りです。[2, 3] は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。[1, 2] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：ArrayListには `remove(int index)` と `remove(Object o)` があります。",
        "試験での注意：Integerリストではremoveのオーバーロード解決が狙われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "output"
    ]
  },
  {
    "id": "unit06-034",
    "number": 34,
    "title": "sealedクラスの許可 #34",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "sealed class A permits B {}\nfinal class B extends A {}\nclass C extends A {}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Bだけコンパイルエラー"
      },
      {
        "key": "C",
        "text": "Cだけコンパイルエラー"
      },
      {
        "key": "D",
        "text": "Aだけコンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。sealed class AはpermitsでBだけを許可しています。Cは許可されていないためコンパイルエラーです。",
      "points": [
        "正解：C：Cだけコンパイルエラー",
        "正解になる理由：sealed class AはpermitsでBだけを許可しています。Cは許可されていないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Bだけコンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。Aだけコンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：sealedの直接サブクラスはpermitsで許可され、かつfinal/sealed/non-sealedのいずれかが必要です。",
        "試験での注意：許可リストとサブクラス側の修飾子を両方確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit06-035",
    "number": 35,
    "title": "catchとfinally #35",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.print(\"A\");\n            int x = 10 / 0;\n            System.out.print(\"B\");\n        } catch (ArithmeticException e) {\n            System.out.print(\"C\");\n        } finally {\n            System.out.print(\"D\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ABCD"
      },
      {
        "key": "B",
        "text": "ACD"
      },
      {
        "key": "C",
        "text": "AD"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。A出力後に0除算でArithmeticExceptionが発生し、Bは実行されません。catchでC、finallyでDが出力されます。",
      "points": [
        "正解：B：ACD",
        "正解になる理由：A出力後に0除算でArithmeticExceptionが発生し、Bは実行されません。catchでC、finallyでDが出力されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。ABCD は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。AD は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：例外が発生するとtryブロックの残りはスキップされます。",
        "試験での注意：finallyは例外の有無にかかわらず基本的に実行されます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "output"
    ]
  },
  {
    "id": "unit06-036",
    "number": 36,
    "title": "catch順序 #36",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { throw new RuntimeException(); }\n        catch (Exception e) { System.out.println(\"E\"); }\n        catch (RuntimeException e) { System.out.println(\"R\"); }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "E"
      },
      {
        "key": "B",
        "text": "R"
      },
      {
        "key": "C",
        "text": "ER"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。先にExceptionで捕捉すると、後続のRuntimeException catchは到達不能になります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：先にExceptionで捕捉すると、後続のRuntimeException catchは到達不能になります。",
        "誤答選択肢が誤りである理由：Aは誤りです。E は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。R は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。ER は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：catchはサブクラスからスーパークラスの順に並べます。",
        "試験での注意：広い例外型を先に書くと後続catchが無効になります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit06-037",
    "number": 37,
    "title": "try-with-resourcesのclose順 #37",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class R implements AutoCloseable {\n    String name; R(String n){ name = n; }\n    public void close(){ System.out.print(name); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        try (R a = new R(\"A\"); R b = new R(\"B\")) {\n            System.out.print(\"T\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "TAB"
      },
      {
        "key": "B",
        "text": "TBA"
      },
      {
        "key": "C",
        "text": "ABT"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。tryブロックのTの後、リソースは宣言と逆順にcloseされます。B、Aの順で表示されます。",
      "points": [
        "正解：B：TBA",
        "正解になる理由：tryブロックのTの後、リソースは宣言と逆順にcloseされます。B、Aの順で表示されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。TAB は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。ABT は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：try-with-resources対象はAutoCloseableを実装している必要があります。",
        "試験での注意：複数リソースは後に宣言したものから閉じます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "output"
    ]
  },
  {
    "id": "unit06-038",
    "number": 38,
    "title": "mainメソッドと起動引数 #38",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main red blue` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0] + \":\" + args.length);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "red:1"
      },
      {
        "key": "B",
        "text": "blue:2"
      },
      {
        "key": "C",
        "text": "red:2"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
      "points": [
        "正解：C：red:2",
        "正解になる理由：`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。red:1 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。blue:2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：起動引数にはクラス名は含まれません。`String[] args` と `String... args` はどちらも有効です。",
        "試験での注意：添字は0始まりですが、lengthは要素数です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "output"
    ]
  },
  {
    "id": "unit06-039",
    "number": 39,
    "title": "起動引数なし実行 #39",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String... args) {\n        System.out.println(args[0]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`args` 自体は通常nullではありません。空配列として渡されます。",
        "試験での注意：nullと空配列を混同しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit06-040",
    "number": 40,
    "title": "ArrayListのremove #40",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(1); list.add(2); list.add(3);\n        list.remove(1);\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[1, 3]"
      },
      {
        "key": "B",
        "text": "[2, 3]"
      },
      {
        "key": "C",
        "text": "[1, 2]"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
      "points": [
        "正解：A：[1, 3]",
        "正解になる理由：`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
        "誤答選択肢が誤りである理由：Bは誤りです。[2, 3] は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。[1, 2] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：ArrayListには `remove(int index)` と `remove(Object o)` があります。",
        "試験での注意：Integerリストではremoveのオーバーロード解決が狙われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "output"
    ]
  },
  {
    "id": "unit06-041",
    "number": 41,
    "title": "sealedクラスの許可 #41",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "sealed class A permits B {}\nfinal class B extends A {}\nclass C extends A {}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Bだけコンパイルエラー"
      },
      {
        "key": "C",
        "text": "Cだけコンパイルエラー"
      },
      {
        "key": "D",
        "text": "Aだけコンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。sealed class AはpermitsでBだけを許可しています。Cは許可されていないためコンパイルエラーです。",
      "points": [
        "正解：C：Cだけコンパイルエラー",
        "正解になる理由：sealed class AはpermitsでBだけを許可しています。Cは許可されていないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Bだけコンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。Aだけコンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：sealedの直接サブクラスはpermitsで許可され、かつfinal/sealed/non-sealedのいずれかが必要です。",
        "試験での注意：許可リストとサブクラス側の修飾子を両方確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit06-042",
    "number": 42,
    "title": "catchとfinally #42",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.print(\"A\");\n            int x = 10 / 0;\n            System.out.print(\"B\");\n        } catch (ArithmeticException e) {\n            System.out.print(\"C\");\n        } finally {\n            System.out.print(\"D\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ABCD"
      },
      {
        "key": "B",
        "text": "ACD"
      },
      {
        "key": "C",
        "text": "AD"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。A出力後に0除算でArithmeticExceptionが発生し、Bは実行されません。catchでC、finallyでDが出力されます。",
      "points": [
        "正解：B：ACD",
        "正解になる理由：A出力後に0除算でArithmeticExceptionが発生し、Bは実行されません。catchでC、finallyでDが出力されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。ABCD は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。AD は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：例外が発生するとtryブロックの残りはスキップされます。",
        "試験での注意：finallyは例外の有無にかかわらず基本的に実行されます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "output"
    ]
  },
  {
    "id": "unit06-043",
    "number": 43,
    "title": "catch順序 #43",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try { throw new RuntimeException(); }\n        catch (Exception e) { System.out.println(\"E\"); }\n        catch (RuntimeException e) { System.out.println(\"R\"); }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "E"
      },
      {
        "key": "B",
        "text": "R"
      },
      {
        "key": "C",
        "text": "ER"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。先にExceptionで捕捉すると、後続のRuntimeException catchは到達不能になります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：先にExceptionで捕捉すると、後続のRuntimeException catchは到達不能になります。",
        "誤答選択肢が誤りである理由：Aは誤りです。E は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。R は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。ER は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：catchはサブクラスからスーパークラスの順に並べます。",
        "試験での注意：広い例外型を先に書くと後続catchが無効になります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit06-044",
    "number": 44,
    "title": "try-with-resourcesのclose順 #44",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class R implements AutoCloseable {\n    String name; R(String n){ name = n; }\n    public void close(){ System.out.print(name); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        try (R a = new R(\"A\"); R b = new R(\"B\")) {\n            System.out.print(\"T\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "TAB"
      },
      {
        "key": "B",
        "text": "TBA"
      },
      {
        "key": "C",
        "text": "ABT"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。tryブロックのTの後、リソースは宣言と逆順にcloseされます。B、Aの順で表示されます。",
      "points": [
        "正解：B：TBA",
        "正解になる理由：tryブロックのTの後、リソースは宣言と逆順にcloseされます。B、Aの順で表示されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。TAB は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。ABT は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：try-with-resources対象はAutoCloseableを実装している必要があります。",
        "試験での注意：複数リソースは後に宣言したものから閉じます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "output"
    ]
  },
  {
    "id": "unit06-045",
    "number": 45,
    "title": "mainメソッドと起動引数 #45",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main red blue` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args[0] + \":\" + args.length);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "red:1"
      },
      {
        "key": "B",
        "text": "blue:2"
      },
      {
        "key": "C",
        "text": "red:2"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
      "points": [
        "正解：C：red:2",
        "正解になる理由：`args[0]` は最初の起動引数 `red`、`args.length` は2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。red:1 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。blue:2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：起動引数にはクラス名は含まれません。`String[] args` と `String... args` はどちらも有効です。",
        "試験での注意：添字は0始まりですが、lengthは要素数です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "output"
    ]
  },
  {
    "id": "unit06-046",
    "number": 46,
    "title": "起動引数なし実行 #46",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムを `java Main` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String... args) {\n        System.out.println(args[0]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：起動引数がない場合、`args` は要素数0の配列です。`args[0]` 参照で `ArrayIndexOutOfBoundsException` が発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`args` 自体は通常nullではありません。空配列として渡されます。",
        "試験での注意：nullと空配列を混同しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "basic",
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit06-047",
    "number": 47,
    "title": "ArrayListのremove #47",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        list.add(1); list.add(2); list.add(3);\n        list.remove(1);\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[1, 3]"
      },
      {
        "key": "B",
        "text": "[2, 3]"
      },
      {
        "key": "C",
        "text": "[1, 2]"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
      "points": [
        "正解：A：[1, 3]",
        "正解になる理由：`remove(1)` はint引数なので添字1の要素を削除します。値1ではなく値2が削除されます。",
        "誤答選択肢が誤りである理由：Bは誤りです。[2, 3] は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。[1, 2] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：ArrayListには `remove(int index)` と `remove(Object o)` があります。",
        "試験での注意：Integerリストではremoveのオーバーロード解決が狙われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "output"
    ]
  },
  {
    "id": "unit06-048",
    "number": 48,
    "title": "sealedクラスの許可 #48",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "sealed class A permits B {}\nfinal class B extends A {}\nclass C extends A {}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Bだけコンパイルエラー"
      },
      {
        "key": "C",
        "text": "Cだけコンパイルエラー"
      },
      {
        "key": "D",
        "text": "Aだけコンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。sealed class AはpermitsでBだけを許可しています。Cは許可されていないためコンパイルエラーです。",
      "points": [
        "正解：C：Cだけコンパイルエラー",
        "正解になる理由：sealed class AはpermitsでBだけを許可しています。Cは許可されていないためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Bだけコンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。Aだけコンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：sealedの直接サブクラスはpermitsで許可され、かつfinal/sealed/non-sealedのいずれかが必要です。",
        "試験での注意：許可リストとサブクラス側の修飾子を両方確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit06-049",
    "number": 49,
    "title": "catchとfinally #49",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.print(\"A\");\n            int x = 10 / 0;\n            System.out.print(\"B\");\n        } catch (ArithmeticException e) {\n            System.out.print(\"C\");\n        } finally {\n            System.out.print(\"D\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ABCD"
      },
      {
        "key": "B",
        "text": "ACD"
      },
      {
        "key": "C",
        "text": "AD"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。A出力後に0除算でArithmeticExceptionが発生し、Bは実行されません。catchでC、finallyでDが出力されます。",
      "points": [
        "正解：B：ACD",
        "正解になる理由：A出力後に0除算でArithmeticExceptionが発生し、Bは実行されません。catchでC、finallyでDが出力されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。ABCD は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。AD は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：例外が発生するとtryブロックの残りはスキップされます。",
        "試験での注意：finallyは例外の有無にかかわらず基本的に実行されます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "output"
    ]
  }
];
