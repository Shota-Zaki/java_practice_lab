window.JAVA_STUDY_SPLIT = window.JAVA_STUDY_SPLIT || {};
window.JAVA_STUDY_SPLIT['unit09'] = [
  {
    "id": "unit09-001",
    "number": 1,
    "title": "Stringの不変性 #1",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcde\";\n        s.replace('c', 'X');\n        System.out.println(s);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "abXde"
      },
      {
        "key": "B",
        "text": "abcde"
      },
      {
        "key": "C",
        "text": "X"
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
      "summary": "正解はBです。Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
      "points": [
        "正解：B：abcde",
        "正解になる理由：Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
        "誤答選択肢が誤りである理由：Aは誤りです。abXde は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。X は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Stringの多くのメソッドは非破壊で、新しいStringを返します。",
        "試験での注意：戻り値を代入しているかを必ず確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "output"
    ]
  },
  {
    "id": "unit09-002",
    "number": 2,
    "title": "StringBuilderのequals #2",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder a = new StringBuilder(\"A\");\n        StringBuilder b = new StringBuilder(\"A\");\n        System.out.println(a.equals(b));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "A"
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
      "summary": "正解はBです。StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。A は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：StringのequalsとStringBuilderのequalsは同じではありません。",
        "試験での注意：「見た目の文字列が同じ」だけでtrueにしないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit09-003",
    "number": 3,
    "title": "recordのequals #3",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "record Sample(int n) {}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Sample(1).equals(new Sample(1)));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "1"
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
      "summary": "正解はAです。recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
      "points": [
        "正解：A：true",
        "正解になる理由：recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
        "誤答選択肢が誤りである理由：Bは誤りです。false は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordはequals、hashCode、toString、アクセサを自動生成します。",
        "試験での注意：通常クラスでequals未実装の場合とは結果が異なります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "class",
      "output"
    ]
  },
  {
    "id": "unit09-004",
    "number": 4,
    "title": "多次元配列の未初期化部分 #4",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = new int[2][];\n        a[0] = new int[]{1, 2};\n        System.out.println(a[0].length + \":\" + a[1]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "2:0"
      },
      {
        "key": "B",
        "text": "2:null"
      },
      {
        "key": "C",
        "text": "0:null"
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
      "summary": "正解はBです。`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
      "points": [
        "正解：B：2:null",
        "正解になる理由：`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
        "誤答選択肢が誤りである理由：Aは誤りです。2:0 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0:null は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Javaの多次元配列は配列の配列です。",
        "試験での注意：2次元目の配列が自動生成される形とされない形を区別します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit09-005",
    "number": 5,
    "title": "フィールド隠蔽とメソッド実行 #5",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A { String name = \"A\"; String get(){ return name; } }\nclass B extends A { String name = \"B\"; String get(){ return name; } }\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a.name + a.get());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "AA"
      },
      {
        "key": "B",
        "text": "AB"
      },
      {
        "key": "C",
        "text": "BA"
      },
      {
        "key": "D",
        "text": "BB"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。フィールドアクセスは参照変数の型Aで決まりA、メソッド呼び出しは実体Bで決まりBです。",
      "points": [
        "正解：B：AB",
        "正解になる理由：フィールドアクセスは参照変数の型Aで決まりA、メソッド呼び出しは実体Bで決まりBです。",
        "誤答選択肢が誤りである理由：Aは誤りです。AA は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。BA は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。BB は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：フィールドはオーバーライドされず、同名フィールドは隠蔽になります。",
        "試験での注意：メソッドとフィールドで決まり方が違います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit09-006",
    "number": 6,
    "title": "catch順序 #6",
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
    "id": "unit09-007",
    "number": 7,
    "title": "thisと同名変数 #7",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Sample {\n    int value;\n    Sample(int value) {\n        value = value;\n    }\n    public static void main(String[] args) {\n        System.out.println(new Sample(10).value);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "10"
      },
      {
        "key": "C",
        "text": "null"
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
      "summary": "正解はAです。コンストラクタ内の `value = value` は引数自身への代入です。フィールドはデフォルト値0のままです。",
      "points": [
        "正解：A：0",
        "正解になる理由：コンストラクタ内の `value = value` は引数自身への代入です。フィールドはデフォルト値0のままです。",
        "誤答選択肢が誤りである理由：Bは誤りです。10 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：同名のローカル変数・引数がある場合、`this.value` と書くとフィールドを指せます。",
        "試験での注意：代入文があるだけでフィールドが更新されたと判断しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "class",
      "output"
    ]
  },
  {
    "id": "unit09-008",
    "number": 8,
    "title": "コンストラクタチェーン #8",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A { A(int x){} }\nclass B extends A { B(){ } }"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Aのコンストラクタが自動実行される"
      },
      {
        "key": "C",
        "text": "何も表示されない"
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
      "summary": "正解はDです。Bのコンストラクタには暗黙に `super()` が挿入されますが、Aには引数なしコンストラクタがありません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：Bのコンストラクタには暗黙に `super()` が挿入されますが、Aには引数なしコンストラクタがありません。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Aのコンストラクタが自動実行される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：サブクラスのコンストラクタでは、最初にスーパークラスのコンストラクタを呼びます。",
        "試験での注意：スーパークラスに引数なしコンストラクタがない場合は `super(値)` が必要です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "class",
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit09-009",
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
    "id": "unit09-010",
    "number": 10,
    "title": "起動引数なし実行 #10",
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
    "id": "unit09-011",
    "number": 11,
    "title": "Stringの不変性 #11",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcde\";\n        s.replace('c', 'X');\n        System.out.println(s);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "abXde"
      },
      {
        "key": "B",
        "text": "abcde"
      },
      {
        "key": "C",
        "text": "X"
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
      "summary": "正解はBです。Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
      "points": [
        "正解：B：abcde",
        "正解になる理由：Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
        "誤答選択肢が誤りである理由：Aは誤りです。abXde は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。X は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Stringの多くのメソッドは非破壊で、新しいStringを返します。",
        "試験での注意：戻り値を代入しているかを必ず確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "output"
    ]
  },
  {
    "id": "unit09-012",
    "number": 12,
    "title": "StringBuilderのequals #12",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder a = new StringBuilder(\"A\");\n        StringBuilder b = new StringBuilder(\"A\");\n        System.out.println(a.equals(b));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "A"
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
      "summary": "正解はBです。StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。A は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：StringのequalsとStringBuilderのequalsは同じではありません。",
        "試験での注意：「見た目の文字列が同じ」だけでtrueにしないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit09-013",
    "number": 13,
    "title": "recordのequals #13",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "record Sample(int n) {}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Sample(1).equals(new Sample(1)));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "1"
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
      "summary": "正解はAです。recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
      "points": [
        "正解：A：true",
        "正解になる理由：recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
        "誤答選択肢が誤りである理由：Bは誤りです。false は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordはequals、hashCode、toString、アクセサを自動生成します。",
        "試験での注意：通常クラスでequals未実装の場合とは結果が異なります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "class",
      "output"
    ]
  },
  {
    "id": "unit09-014",
    "number": 14,
    "title": "多次元配列の未初期化部分 #14",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = new int[2][];\n        a[0] = new int[]{1, 2};\n        System.out.println(a[0].length + \":\" + a[1]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "2:0"
      },
      {
        "key": "B",
        "text": "2:null"
      },
      {
        "key": "C",
        "text": "0:null"
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
      "summary": "正解はBです。`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
      "points": [
        "正解：B：2:null",
        "正解になる理由：`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
        "誤答選択肢が誤りである理由：Aは誤りです。2:0 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0:null は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Javaの多次元配列は配列の配列です。",
        "試験での注意：2次元目の配列が自動生成される形とされない形を区別します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit09-015",
    "number": 15,
    "title": "フィールド隠蔽とメソッド実行 #15",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A { String name = \"A\"; String get(){ return name; } }\nclass B extends A { String name = \"B\"; String get(){ return name; } }\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a.name + a.get());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "AA"
      },
      {
        "key": "B",
        "text": "AB"
      },
      {
        "key": "C",
        "text": "BA"
      },
      {
        "key": "D",
        "text": "BB"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。フィールドアクセスは参照変数の型Aで決まりA、メソッド呼び出しは実体Bで決まりBです。",
      "points": [
        "正解：B：AB",
        "正解になる理由：フィールドアクセスは参照変数の型Aで決まりA、メソッド呼び出しは実体Bで決まりBです。",
        "誤答選択肢が誤りである理由：Aは誤りです。AA は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。BA は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。BB は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：フィールドはオーバーライドされず、同名フィールドは隠蔽になります。",
        "試験での注意：メソッドとフィールドで決まり方が違います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit09-016",
    "number": 16,
    "title": "catch順序 #16",
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
    "id": "unit09-017",
    "number": 17,
    "title": "thisと同名変数 #17",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Sample {\n    int value;\n    Sample(int value) {\n        value = value;\n    }\n    public static void main(String[] args) {\n        System.out.println(new Sample(10).value);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "10"
      },
      {
        "key": "C",
        "text": "null"
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
      "summary": "正解はAです。コンストラクタ内の `value = value` は引数自身への代入です。フィールドはデフォルト値0のままです。",
      "points": [
        "正解：A：0",
        "正解になる理由：コンストラクタ内の `value = value` は引数自身への代入です。フィールドはデフォルト値0のままです。",
        "誤答選択肢が誤りである理由：Bは誤りです。10 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：同名のローカル変数・引数がある場合、`this.value` と書くとフィールドを指せます。",
        "試験での注意：代入文があるだけでフィールドが更新されたと判断しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "class",
      "output"
    ]
  },
  {
    "id": "unit09-018",
    "number": 18,
    "title": "コンストラクタチェーン #18",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A { A(int x){} }\nclass B extends A { B(){ } }"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Aのコンストラクタが自動実行される"
      },
      {
        "key": "C",
        "text": "何も表示されない"
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
      "summary": "正解はDです。Bのコンストラクタには暗黙に `super()` が挿入されますが、Aには引数なしコンストラクタがありません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：Bのコンストラクタには暗黙に `super()` が挿入されますが、Aには引数なしコンストラクタがありません。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Aのコンストラクタが自動実行される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：サブクラスのコンストラクタでは、最初にスーパークラスのコンストラクタを呼びます。",
        "試験での注意：スーパークラスに引数なしコンストラクタがない場合は `super(値)` が必要です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "class",
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit09-019",
    "number": 19,
    "title": "try-with-resourcesのclose順 #19",
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
    "id": "unit09-020",
    "number": 20,
    "title": "起動引数なし実行 #20",
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
    "id": "unit09-021",
    "number": 21,
    "title": "Stringの不変性 #21",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcde\";\n        s.replace('c', 'X');\n        System.out.println(s);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "abXde"
      },
      {
        "key": "B",
        "text": "abcde"
      },
      {
        "key": "C",
        "text": "X"
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
      "summary": "正解はBです。Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
      "points": [
        "正解：B：abcde",
        "正解になる理由：Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
        "誤答選択肢が誤りである理由：Aは誤りです。abXde は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。X は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Stringの多くのメソッドは非破壊で、新しいStringを返します。",
        "試験での注意：戻り値を代入しているかを必ず確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "output"
    ]
  },
  {
    "id": "unit09-022",
    "number": 22,
    "title": "StringBuilderのequals #22",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder a = new StringBuilder(\"A\");\n        StringBuilder b = new StringBuilder(\"A\");\n        System.out.println(a.equals(b));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "A"
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
      "summary": "正解はBです。StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。A は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：StringのequalsとStringBuilderのequalsは同じではありません。",
        "試験での注意：「見た目の文字列が同じ」だけでtrueにしないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit09-023",
    "number": 23,
    "title": "recordのequals #23",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "record Sample(int n) {}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Sample(1).equals(new Sample(1)));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "1"
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
      "summary": "正解はAです。recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
      "points": [
        "正解：A：true",
        "正解になる理由：recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
        "誤答選択肢が誤りである理由：Bは誤りです。false は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordはequals、hashCode、toString、アクセサを自動生成します。",
        "試験での注意：通常クラスでequals未実装の場合とは結果が異なります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "class",
      "output"
    ]
  },
  {
    "id": "unit09-024",
    "number": 24,
    "title": "多次元配列の未初期化部分 #24",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = new int[2][];\n        a[0] = new int[]{1, 2};\n        System.out.println(a[0].length + \":\" + a[1]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "2:0"
      },
      {
        "key": "B",
        "text": "2:null"
      },
      {
        "key": "C",
        "text": "0:null"
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
      "summary": "正解はBです。`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
      "points": [
        "正解：B：2:null",
        "正解になる理由：`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
        "誤答選択肢が誤りである理由：Aは誤りです。2:0 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0:null は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Javaの多次元配列は配列の配列です。",
        "試験での注意：2次元目の配列が自動生成される形とされない形を区別します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit09-025",
    "number": 25,
    "title": "フィールド隠蔽とメソッド実行 #25",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A { String name = \"A\"; String get(){ return name; } }\nclass B extends A { String name = \"B\"; String get(){ return name; } }\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a.name + a.get());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "AA"
      },
      {
        "key": "B",
        "text": "AB"
      },
      {
        "key": "C",
        "text": "BA"
      },
      {
        "key": "D",
        "text": "BB"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。フィールドアクセスは参照変数の型Aで決まりA、メソッド呼び出しは実体Bで決まりBです。",
      "points": [
        "正解：B：AB",
        "正解になる理由：フィールドアクセスは参照変数の型Aで決まりA、メソッド呼び出しは実体Bで決まりBです。",
        "誤答選択肢が誤りである理由：Aは誤りです。AA は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。BA は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。BB は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：フィールドはオーバーライドされず、同名フィールドは隠蔽になります。",
        "試験での注意：メソッドとフィールドで決まり方が違います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit09-026",
    "number": 26,
    "title": "catch順序 #26",
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
    "id": "unit09-027",
    "number": 27,
    "title": "thisと同名変数 #27",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Sample {\n    int value;\n    Sample(int value) {\n        value = value;\n    }\n    public static void main(String[] args) {\n        System.out.println(new Sample(10).value);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "10"
      },
      {
        "key": "C",
        "text": "null"
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
      "summary": "正解はAです。コンストラクタ内の `value = value` は引数自身への代入です。フィールドはデフォルト値0のままです。",
      "points": [
        "正解：A：0",
        "正解になる理由：コンストラクタ内の `value = value` は引数自身への代入です。フィールドはデフォルト値0のままです。",
        "誤答選択肢が誤りである理由：Bは誤りです。10 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：同名のローカル変数・引数がある場合、`this.value` と書くとフィールドを指せます。",
        "試験での注意：代入文があるだけでフィールドが更新されたと判断しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "class",
      "output"
    ]
  },
  {
    "id": "unit09-028",
    "number": 28,
    "title": "コンストラクタチェーン #28",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A { A(int x){} }\nclass B extends A { B(){ } }"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Aのコンストラクタが自動実行される"
      },
      {
        "key": "C",
        "text": "何も表示されない"
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
      "summary": "正解はDです。Bのコンストラクタには暗黙に `super()` が挿入されますが、Aには引数なしコンストラクタがありません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：Bのコンストラクタには暗黙に `super()` が挿入されますが、Aには引数なしコンストラクタがありません。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Aのコンストラクタが自動実行される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：サブクラスのコンストラクタでは、最初にスーパークラスのコンストラクタを呼びます。",
        "試験での注意：スーパークラスに引数なしコンストラクタがない場合は `super(値)` が必要です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "class",
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit09-029",
    "number": 29,
    "title": "try-with-resourcesのclose順 #29",
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
    "id": "unit09-030",
    "number": 30,
    "title": "起動引数なし実行 #30",
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
    "id": "unit09-031",
    "number": 31,
    "title": "Stringの不変性 #31",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcde\";\n        s.replace('c', 'X');\n        System.out.println(s);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "abXde"
      },
      {
        "key": "B",
        "text": "abcde"
      },
      {
        "key": "C",
        "text": "X"
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
      "summary": "正解はBです。Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
      "points": [
        "正解：B：abcde",
        "正解になる理由：Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
        "誤答選択肢が誤りである理由：Aは誤りです。abXde は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。X は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Stringの多くのメソッドは非破壊で、新しいStringを返します。",
        "試験での注意：戻り値を代入しているかを必ず確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "output"
    ]
  },
  {
    "id": "unit09-032",
    "number": 32,
    "title": "StringBuilderのequals #32",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder a = new StringBuilder(\"A\");\n        StringBuilder b = new StringBuilder(\"A\");\n        System.out.println(a.equals(b));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "A"
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
      "summary": "正解はBです。StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。A は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：StringのequalsとStringBuilderのequalsは同じではありません。",
        "試験での注意：「見た目の文字列が同じ」だけでtrueにしないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit09-033",
    "number": 33,
    "title": "recordのequals #33",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "record Sample(int n) {}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Sample(1).equals(new Sample(1)));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "1"
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
      "summary": "正解はAです。recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
      "points": [
        "正解：A：true",
        "正解になる理由：recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
        "誤答選択肢が誤りである理由：Bは誤りです。false は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordはequals、hashCode、toString、アクセサを自動生成します。",
        "試験での注意：通常クラスでequals未実装の場合とは結果が異なります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "class",
      "output"
    ]
  },
  {
    "id": "unit09-034",
    "number": 34,
    "title": "多次元配列の未初期化部分 #34",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = new int[2][];\n        a[0] = new int[]{1, 2};\n        System.out.println(a[0].length + \":\" + a[1]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "2:0"
      },
      {
        "key": "B",
        "text": "2:null"
      },
      {
        "key": "C",
        "text": "0:null"
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
      "summary": "正解はBです。`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
      "points": [
        "正解：B：2:null",
        "正解になる理由：`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
        "誤答選択肢が誤りである理由：Aは誤りです。2:0 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0:null は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Javaの多次元配列は配列の配列です。",
        "試験での注意：2次元目の配列が自動生成される形とされない形を区別します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit09-035",
    "number": 35,
    "title": "フィールド隠蔽とメソッド実行 #35",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A { String name = \"A\"; String get(){ return name; } }\nclass B extends A { String name = \"B\"; String get(){ return name; } }\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a.name + a.get());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "AA"
      },
      {
        "key": "B",
        "text": "AB"
      },
      {
        "key": "C",
        "text": "BA"
      },
      {
        "key": "D",
        "text": "BB"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。フィールドアクセスは参照変数の型Aで決まりA、メソッド呼び出しは実体Bで決まりBです。",
      "points": [
        "正解：B：AB",
        "正解になる理由：フィールドアクセスは参照変数の型Aで決まりA、メソッド呼び出しは実体Bで決まりBです。",
        "誤答選択肢が誤りである理由：Aは誤りです。AA は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。BA は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。BB は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：フィールドはオーバーライドされず、同名フィールドは隠蔽になります。",
        "試験での注意：メソッドとフィールドで決まり方が違います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit09-036",
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
    "id": "unit09-037",
    "number": 37,
    "title": "thisと同名変数 #37",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Sample {\n    int value;\n    Sample(int value) {\n        value = value;\n    }\n    public static void main(String[] args) {\n        System.out.println(new Sample(10).value);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "10"
      },
      {
        "key": "C",
        "text": "null"
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
      "summary": "正解はAです。コンストラクタ内の `value = value` は引数自身への代入です。フィールドはデフォルト値0のままです。",
      "points": [
        "正解：A：0",
        "正解になる理由：コンストラクタ内の `value = value` は引数自身への代入です。フィールドはデフォルト値0のままです。",
        "誤答選択肢が誤りである理由：Bは誤りです。10 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：同名のローカル変数・引数がある場合、`this.value` と書くとフィールドを指せます。",
        "試験での注意：代入文があるだけでフィールドが更新されたと判断しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "class",
      "output"
    ]
  },
  {
    "id": "unit09-038",
    "number": 38,
    "title": "コンストラクタチェーン #38",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A { A(int x){} }\nclass B extends A { B(){ } }"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Aのコンストラクタが自動実行される"
      },
      {
        "key": "C",
        "text": "何も表示されない"
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
      "summary": "正解はDです。Bのコンストラクタには暗黙に `super()` が挿入されますが、Aには引数なしコンストラクタがありません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：Bのコンストラクタには暗黙に `super()` が挿入されますが、Aには引数なしコンストラクタがありません。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Aのコンストラクタが自動実行される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：サブクラスのコンストラクタでは、最初にスーパークラスのコンストラクタを呼びます。",
        "試験での注意：スーパークラスに引数なしコンストラクタがない場合は `super(値)` が必要です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "class",
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit09-039",
    "number": 39,
    "title": "try-with-resourcesのclose順 #39",
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
    "id": "unit09-040",
    "number": 40,
    "title": "起動引数なし実行 #40",
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
    "id": "unit09-041",
    "number": 41,
    "title": "Stringの不変性 #41",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcde\";\n        s.replace('c', 'X');\n        System.out.println(s);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "abXde"
      },
      {
        "key": "B",
        "text": "abcde"
      },
      {
        "key": "C",
        "text": "X"
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
      "summary": "正解はBです。Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
      "points": [
        "正解：B：abcde",
        "正解になる理由：Stringは不変です。`replace` は新しい文字列を返しますが、戻り値を受け取っていないため元の参照先は変わりません。",
        "誤答選択肢が誤りである理由：Aは誤りです。abXde は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。X は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Stringの多くのメソッドは非破壊で、新しいStringを返します。",
        "試験での注意：戻り値を代入しているかを必ず確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "output"
    ]
  },
  {
    "id": "unit09-042",
    "number": 42,
    "title": "StringBuilderのequals #42",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder a = new StringBuilder(\"A\");\n        StringBuilder b = new StringBuilder(\"A\");\n        System.out.println(a.equals(b));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "A"
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
      "summary": "正解はBです。StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：StringBuilderは内容比較としてequalsをオーバーライドしていません。別インスタンス同士なのでfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。A は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：StringのequalsとStringBuilderのequalsは同じではありません。",
        "試験での注意：「見た目の文字列が同じ」だけでtrueにしないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "string",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit09-043",
    "number": 43,
    "title": "recordのequals #43",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "record Sample(int n) {}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Sample(1).equals(new Sample(1)));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "1"
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
      "summary": "正解はAです。recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
      "points": [
        "正解：A：true",
        "正解になる理由：recordはコンポーネントに基づくequalsを自動生成します。nが同じなのでtrueです。",
        "誤答選択肢が誤りである理由：Bは誤りです。false は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordはequals、hashCode、toString、アクセサを自動生成します。",
        "試験での注意：通常クラスでequals未実装の場合とは結果が異なります。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "class",
      "output"
    ]
  },
  {
    "id": "unit09-044",
    "number": 44,
    "title": "多次元配列の未初期化部分 #44",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = new int[2][];\n        a[0] = new int[]{1, 2};\n        System.out.println(a[0].length + \":\" + a[1]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "2:0"
      },
      {
        "key": "B",
        "text": "2:null"
      },
      {
        "key": "C",
        "text": "0:null"
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
      "summary": "正解はBです。`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
      "points": [
        "正解：B：2:null",
        "正解になる理由：`new int[2][]` では2段目の配列は作られません。`a[0]` は長さ2、`a[1]` はnullです。",
        "誤答選択肢が誤りである理由：Aは誤りです。2:0 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0:null は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Javaの多次元配列は配列の配列です。",
        "試験での注意：2次元目の配列が自動生成される形とされない形を区別します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit09-045",
    "number": 45,
    "title": "フィールド隠蔽とメソッド実行 #45",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A { String name = \"A\"; String get(){ return name; } }\nclass B extends A { String name = \"B\"; String get(){ return name; } }\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a.name + a.get());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "AA"
      },
      {
        "key": "B",
        "text": "AB"
      },
      {
        "key": "C",
        "text": "BA"
      },
      {
        "key": "D",
        "text": "BB"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。フィールドアクセスは参照変数の型Aで決まりA、メソッド呼び出しは実体Bで決まりBです。",
      "points": [
        "正解：B：AB",
        "正解になる理由：フィールドアクセスは参照変数の型Aで決まりA、メソッド呼び出しは実体Bで決まりBです。",
        "誤答選択肢が誤りである理由：Aは誤りです。AA は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。BA は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。BB は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：フィールドはオーバーライドされず、同名フィールドは隠蔽になります。",
        "試験での注意：メソッドとフィールドで決まり方が違います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "reference",
      "output"
    ]
  }
];
