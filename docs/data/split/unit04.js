window.JAVA_STUDY_SPLIT = window.JAVA_STUDY_SPLIT || {};
window.JAVA_STUDY_SPLIT['unit04'] = [
  {
    "id": "unit04-001",
    "number": 1,
    "title": "短絡評価 #1",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    static boolean a(){ System.out.print(\"A\"); return false; }\n    static boolean b(){ System.out.print(\"B\"); return true; }\n    public static void main(String[] args) {\n        System.out.println(a() && b());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ABfalse"
      },
      {
        "key": "B",
        "text": "Afalse"
      },
      {
        "key": "C",
        "text": "Bfalse"
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
      "summary": "正解はBです。`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
      "points": [
        "正解：B：Afalse",
        "正解になる理由：`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。ABfalse は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bfalse は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`&&` と `||` は短絡評価します。`&` と `|` はbooleanでも両辺を評価します。",
        "試験での注意：メソッド呼び出しの副作用が発生するかが問われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-002",
    "number": 2,
    "title": "switch文のフォールスルー #2",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 0;\n        switch (2) {\n            case 1: n++;\n            case 2: n++;\n            case 3: n++; break;\n            default: n++;\n        }\n        System.out.println(n);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
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
      "summary": "正解はBです。case 2から処理が始まり、breakまでcase 2とcase 3を実行します。nは2です。",
      "points": [
        "正解：B：2",
        "正解になる理由：case 2から処理が始まり、breakまでcase 2とcase 3を実行します。nは2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：switch文はbreakがないと次のcaseへ処理が流れます。",
        "試験での注意：switch式の `->` とは挙動が違います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-003",
    "number": 3,
    "title": "do-whileの実行回数 #3",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        do {\n            System.out.print(i);\n            i++;\n        } while (i < 0);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "0"
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
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。do-whileは条件判定が後なので、条件がfalseでも本体は1回実行されます。",
      "points": [
        "正解：B：0",
        "正解になる理由：do-whileは条件判定が後なので、条件がfalseでも本体は1回実行されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：while文とdo-while文の違いは最低実行回数です。",
        "試験での注意：条件式だけを見て「実行されない」と判断しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-004",
    "number": 4,
    "title": "thisと同名変数 #4",
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
    "id": "unit04-005",
    "number": 5,
    "title": "コンストラクタチェーン #5",
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
    "id": "unit04-006",
    "number": 6,
    "title": "recordのアクセサ #6",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public record Item(String name, int price) { }\nclass Main {\n    public static void main(String[] args) {\n        Item item = new Item(\"A\", 100);\n        System.out.println(item.name() + item.price());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A100"
      },
      {
        "key": "B",
        "text": "A,100"
      },
      {
        "key": "C",
        "text": "Item[A,100]"
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
      "summary": "正解はAです。recordはコンポーネント名と同じアクセサ `name()` と `price()` を自動生成します。",
      "points": [
        "正解：A：A100",
        "正解になる理由：recordはコンポーネント名と同じアクセサ `name()` と `price()` を自動生成します。",
        "誤答選択肢が誤りである理由：Bは誤りです。A,100 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Item[A,100] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordのアクセサはJavaBeans形式の `getName()` ではありません。",
        "試験での注意：recordではフィールドに直接アクセスせず、アクセサメソッドを使います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "class",
      "output"
    ]
  },
  {
    "id": "unit04-007",
    "number": 7,
    "title": "Stringの不変性 #7",
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
    "id": "unit04-008",
    "number": 8,
    "title": "参照の付け替え #8",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class Sample { int n; Sample(int n){ this.n = n; } }\npublic class Main {\n    public static void main(String[] args) {\n        Sample a = new Sample(1);\n        Sample b = a;\n        a = new Sample(1);\n        System.out.println(a == b);\n    }\n}"
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
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：参照型変数にはオブジェクトそのものではなく参照が入ります。",
        "試験での注意：フィールド値が同じでも、同じインスタンスとは限りません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "output"
    ]
  },
  {
    "id": "unit04-009",
    "number": 9,
    "title": "多次元配列の未初期化部分 #9",
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
    "id": "unit04-010",
    "number": 10,
    "title": "短絡評価 #10",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    static boolean a(){ System.out.print(\"A\"); return false; }\n    static boolean b(){ System.out.print(\"B\"); return true; }\n    public static void main(String[] args) {\n        System.out.println(a() && b());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ABfalse"
      },
      {
        "key": "B",
        "text": "Afalse"
      },
      {
        "key": "C",
        "text": "Bfalse"
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
      "summary": "正解はBです。`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
      "points": [
        "正解：B：Afalse",
        "正解になる理由：`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。ABfalse は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bfalse は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`&&` と `||` は短絡評価します。`&` と `|` はbooleanでも両辺を評価します。",
        "試験での注意：メソッド呼び出しの副作用が発生するかが問われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-011",
    "number": 11,
    "title": "switch文のフォールスルー #11",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 0;\n        switch (2) {\n            case 1: n++;\n            case 2: n++;\n            case 3: n++; break;\n            default: n++;\n        }\n        System.out.println(n);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
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
      "summary": "正解はBです。case 2から処理が始まり、breakまでcase 2とcase 3を実行します。nは2です。",
      "points": [
        "正解：B：2",
        "正解になる理由：case 2から処理が始まり、breakまでcase 2とcase 3を実行します。nは2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：switch文はbreakがないと次のcaseへ処理が流れます。",
        "試験での注意：switch式の `->` とは挙動が違います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-012",
    "number": 12,
    "title": "do-whileの実行回数 #12",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        do {\n            System.out.print(i);\n            i++;\n        } while (i < 0);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "0"
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
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。do-whileは条件判定が後なので、条件がfalseでも本体は1回実行されます。",
      "points": [
        "正解：B：0",
        "正解になる理由：do-whileは条件判定が後なので、条件がfalseでも本体は1回実行されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：while文とdo-while文の違いは最低実行回数です。",
        "試験での注意：条件式だけを見て「実行されない」と判断しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-013",
    "number": 13,
    "title": "thisと同名変数 #13",
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
    "id": "unit04-014",
    "number": 14,
    "title": "コンストラクタチェーン #14",
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
    "id": "unit04-015",
    "number": 15,
    "title": "recordのアクセサ #15",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public record Item(String name, int price) { }\nclass Main {\n    public static void main(String[] args) {\n        Item item = new Item(\"A\", 100);\n        System.out.println(item.name() + item.price());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A100"
      },
      {
        "key": "B",
        "text": "A,100"
      },
      {
        "key": "C",
        "text": "Item[A,100]"
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
      "summary": "正解はAです。recordはコンポーネント名と同じアクセサ `name()` と `price()` を自動生成します。",
      "points": [
        "正解：A：A100",
        "正解になる理由：recordはコンポーネント名と同じアクセサ `name()` と `price()` を自動生成します。",
        "誤答選択肢が誤りである理由：Bは誤りです。A,100 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Item[A,100] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordのアクセサはJavaBeans形式の `getName()` ではありません。",
        "試験での注意：recordではフィールドに直接アクセスせず、アクセサメソッドを使います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "class",
      "output"
    ]
  },
  {
    "id": "unit04-016",
    "number": 16,
    "title": "Stringの不変性 #16",
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
    "id": "unit04-017",
    "number": 17,
    "title": "参照の付け替え #17",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class Sample { int n; Sample(int n){ this.n = n; } }\npublic class Main {\n    public static void main(String[] args) {\n        Sample a = new Sample(1);\n        Sample b = a;\n        a = new Sample(1);\n        System.out.println(a == b);\n    }\n}"
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
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：参照型変数にはオブジェクトそのものではなく参照が入ります。",
        "試験での注意：フィールド値が同じでも、同じインスタンスとは限りません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "output"
    ]
  },
  {
    "id": "unit04-018",
    "number": 18,
    "title": "多次元配列の未初期化部分 #18",
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
    "id": "unit04-019",
    "number": 19,
    "title": "短絡評価 #19",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    static boolean a(){ System.out.print(\"A\"); return false; }\n    static boolean b(){ System.out.print(\"B\"); return true; }\n    public static void main(String[] args) {\n        System.out.println(a() && b());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ABfalse"
      },
      {
        "key": "B",
        "text": "Afalse"
      },
      {
        "key": "C",
        "text": "Bfalse"
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
      "summary": "正解はBです。`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
      "points": [
        "正解：B：Afalse",
        "正解になる理由：`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。ABfalse は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bfalse は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`&&` と `||` は短絡評価します。`&` と `|` はbooleanでも両辺を評価します。",
        "試験での注意：メソッド呼び出しの副作用が発生するかが問われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-020",
    "number": 20,
    "title": "switch文のフォールスルー #20",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 0;\n        switch (2) {\n            case 1: n++;\n            case 2: n++;\n            case 3: n++; break;\n            default: n++;\n        }\n        System.out.println(n);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
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
      "summary": "正解はBです。case 2から処理が始まり、breakまでcase 2とcase 3を実行します。nは2です。",
      "points": [
        "正解：B：2",
        "正解になる理由：case 2から処理が始まり、breakまでcase 2とcase 3を実行します。nは2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：switch文はbreakがないと次のcaseへ処理が流れます。",
        "試験での注意：switch式の `->` とは挙動が違います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-021",
    "number": 21,
    "title": "do-whileの実行回数 #21",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        do {\n            System.out.print(i);\n            i++;\n        } while (i < 0);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "0"
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
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。do-whileは条件判定が後なので、条件がfalseでも本体は1回実行されます。",
      "points": [
        "正解：B：0",
        "正解になる理由：do-whileは条件判定が後なので、条件がfalseでも本体は1回実行されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：while文とdo-while文の違いは最低実行回数です。",
        "試験での注意：条件式だけを見て「実行されない」と判断しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-022",
    "number": 22,
    "title": "thisと同名変数 #22",
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
    "id": "unit04-023",
    "number": 23,
    "title": "コンストラクタチェーン #23",
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
    "id": "unit04-024",
    "number": 24,
    "title": "recordのアクセサ #24",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public record Item(String name, int price) { }\nclass Main {\n    public static void main(String[] args) {\n        Item item = new Item(\"A\", 100);\n        System.out.println(item.name() + item.price());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A100"
      },
      {
        "key": "B",
        "text": "A,100"
      },
      {
        "key": "C",
        "text": "Item[A,100]"
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
      "summary": "正解はAです。recordはコンポーネント名と同じアクセサ `name()` と `price()` を自動生成します。",
      "points": [
        "正解：A：A100",
        "正解になる理由：recordはコンポーネント名と同じアクセサ `name()` と `price()` を自動生成します。",
        "誤答選択肢が誤りである理由：Bは誤りです。A,100 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Item[A,100] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordのアクセサはJavaBeans形式の `getName()` ではありません。",
        "試験での注意：recordではフィールドに直接アクセスせず、アクセサメソッドを使います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "class",
      "output"
    ]
  },
  {
    "id": "unit04-025",
    "number": 25,
    "title": "Stringの不変性 #25",
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
    "id": "unit04-026",
    "number": 26,
    "title": "参照の付け替え #26",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class Sample { int n; Sample(int n){ this.n = n; } }\npublic class Main {\n    public static void main(String[] args) {\n        Sample a = new Sample(1);\n        Sample b = a;\n        a = new Sample(1);\n        System.out.println(a == b);\n    }\n}"
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
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：参照型変数にはオブジェクトそのものではなく参照が入ります。",
        "試験での注意：フィールド値が同じでも、同じインスタンスとは限りません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "output"
    ]
  },
  {
    "id": "unit04-027",
    "number": 27,
    "title": "多次元配列の未初期化部分 #27",
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
    "id": "unit04-028",
    "number": 28,
    "title": "短絡評価 #28",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    static boolean a(){ System.out.print(\"A\"); return false; }\n    static boolean b(){ System.out.print(\"B\"); return true; }\n    public static void main(String[] args) {\n        System.out.println(a() && b());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ABfalse"
      },
      {
        "key": "B",
        "text": "Afalse"
      },
      {
        "key": "C",
        "text": "Bfalse"
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
      "summary": "正解はBです。`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
      "points": [
        "正解：B：Afalse",
        "正解になる理由：`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。ABfalse は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bfalse は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`&&` と `||` は短絡評価します。`&` と `|` はbooleanでも両辺を評価します。",
        "試験での注意：メソッド呼び出しの副作用が発生するかが問われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-029",
    "number": 29,
    "title": "switch文のフォールスルー #29",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 0;\n        switch (2) {\n            case 1: n++;\n            case 2: n++;\n            case 3: n++; break;\n            default: n++;\n        }\n        System.out.println(n);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
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
      "summary": "正解はBです。case 2から処理が始まり、breakまでcase 2とcase 3を実行します。nは2です。",
      "points": [
        "正解：B：2",
        "正解になる理由：case 2から処理が始まり、breakまでcase 2とcase 3を実行します。nは2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：switch文はbreakがないと次のcaseへ処理が流れます。",
        "試験での注意：switch式の `->` とは挙動が違います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-030",
    "number": 30,
    "title": "do-whileの実行回数 #30",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        do {\n            System.out.print(i);\n            i++;\n        } while (i < 0);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "0"
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
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。do-whileは条件判定が後なので、条件がfalseでも本体は1回実行されます。",
      "points": [
        "正解：B：0",
        "正解になる理由：do-whileは条件判定が後なので、条件がfalseでも本体は1回実行されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：while文とdo-while文の違いは最低実行回数です。",
        "試験での注意：条件式だけを見て「実行されない」と判断しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-031",
    "number": 31,
    "title": "thisと同名変数 #31",
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
    "id": "unit04-032",
    "number": 32,
    "title": "コンストラクタチェーン #32",
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
    "id": "unit04-033",
    "number": 33,
    "title": "recordのアクセサ #33",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public record Item(String name, int price) { }\nclass Main {\n    public static void main(String[] args) {\n        Item item = new Item(\"A\", 100);\n        System.out.println(item.name() + item.price());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A100"
      },
      {
        "key": "B",
        "text": "A,100"
      },
      {
        "key": "C",
        "text": "Item[A,100]"
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
      "summary": "正解はAです。recordはコンポーネント名と同じアクセサ `name()` と `price()` を自動生成します。",
      "points": [
        "正解：A：A100",
        "正解になる理由：recordはコンポーネント名と同じアクセサ `name()` と `price()` を自動生成します。",
        "誤答選択肢が誤りである理由：Bは誤りです。A,100 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Item[A,100] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordのアクセサはJavaBeans形式の `getName()` ではありません。",
        "試験での注意：recordではフィールドに直接アクセスせず、アクセサメソッドを使います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "class",
      "output"
    ]
  },
  {
    "id": "unit04-034",
    "number": 34,
    "title": "Stringの不変性 #34",
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
    "id": "unit04-035",
    "number": 35,
    "title": "参照の付け替え #35",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class Sample { int n; Sample(int n){ this.n = n; } }\npublic class Main {\n    public static void main(String[] args) {\n        Sample a = new Sample(1);\n        Sample b = a;\n        a = new Sample(1);\n        System.out.println(a == b);\n    }\n}"
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
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：参照型変数にはオブジェクトそのものではなく参照が入ります。",
        "試験での注意：フィールド値が同じでも、同じインスタンスとは限りません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "output"
    ]
  },
  {
    "id": "unit04-036",
    "number": 36,
    "title": "多次元配列の未初期化部分 #36",
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
    "id": "unit04-037",
    "number": 37,
    "title": "短絡評価 #37",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    static boolean a(){ System.out.print(\"A\"); return false; }\n    static boolean b(){ System.out.print(\"B\"); return true; }\n    public static void main(String[] args) {\n        System.out.println(a() && b());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ABfalse"
      },
      {
        "key": "B",
        "text": "Afalse"
      },
      {
        "key": "C",
        "text": "Bfalse"
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
      "summary": "正解はBです。`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
      "points": [
        "正解：B：Afalse",
        "正解になる理由：`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。ABfalse は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bfalse は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`&&` と `||` は短絡評価します。`&` と `|` はbooleanでも両辺を評価します。",
        "試験での注意：メソッド呼び出しの副作用が発生するかが問われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-038",
    "number": 38,
    "title": "switch文のフォールスルー #38",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 0;\n        switch (2) {\n            case 1: n++;\n            case 2: n++;\n            case 3: n++; break;\n            default: n++;\n        }\n        System.out.println(n);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
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
      "summary": "正解はBです。case 2から処理が始まり、breakまでcase 2とcase 3を実行します。nは2です。",
      "points": [
        "正解：B：2",
        "正解になる理由：case 2から処理が始まり、breakまでcase 2とcase 3を実行します。nは2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：switch文はbreakがないと次のcaseへ処理が流れます。",
        "試験での注意：switch式の `->` とは挙動が違います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-039",
    "number": 39,
    "title": "do-whileの実行回数 #39",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        do {\n            System.out.print(i);\n            i++;\n        } while (i < 0);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "0"
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
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。do-whileは条件判定が後なので、条件がfalseでも本体は1回実行されます。",
      "points": [
        "正解：B：0",
        "正解になる理由：do-whileは条件判定が後なので、条件がfalseでも本体は1回実行されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：while文とdo-while文の違いは最低実行回数です。",
        "試験での注意：条件式だけを見て「実行されない」と判断しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-040",
    "number": 40,
    "title": "thisと同名変数 #40",
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
    "id": "unit04-041",
    "number": 41,
    "title": "コンストラクタチェーン #41",
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
    "id": "unit04-042",
    "number": 42,
    "title": "recordのアクセサ #42",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public record Item(String name, int price) { }\nclass Main {\n    public static void main(String[] args) {\n        Item item = new Item(\"A\", 100);\n        System.out.println(item.name() + item.price());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A100"
      },
      {
        "key": "B",
        "text": "A,100"
      },
      {
        "key": "C",
        "text": "Item[A,100]"
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
      "summary": "正解はAです。recordはコンポーネント名と同じアクセサ `name()` と `price()` を自動生成します。",
      "points": [
        "正解：A：A100",
        "正解になる理由：recordはコンポーネント名と同じアクセサ `name()` と `price()` を自動生成します。",
        "誤答選択肢が誤りである理由：Bは誤りです。A,100 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Item[A,100] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordのアクセサはJavaBeans形式の `getName()` ではありません。",
        "試験での注意：recordではフィールドに直接アクセスせず、アクセサメソッドを使います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "class",
      "output"
    ]
  },
  {
    "id": "unit04-043",
    "number": 43,
    "title": "Stringの不変性 #43",
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
    "id": "unit04-044",
    "number": 44,
    "title": "参照の付け替え #44",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class Sample { int n; Sample(int n){ this.n = n; } }\npublic class Main {\n    public static void main(String[] args) {\n        Sample a = new Sample(1);\n        Sample b = a;\n        a = new Sample(1);\n        System.out.println(a == b);\n    }\n}"
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
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：参照型変数にはオブジェクトそのものではなく参照が入ります。",
        "試験での注意：フィールド値が同じでも、同じインスタンスとは限りません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "output"
    ]
  },
  {
    "id": "unit04-045",
    "number": 45,
    "title": "多次元配列の未初期化部分 #45",
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
    "id": "unit04-046",
    "number": 46,
    "title": "短絡評価 #46",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    static boolean a(){ System.out.print(\"A\"); return false; }\n    static boolean b(){ System.out.print(\"B\"); return true; }\n    public static void main(String[] args) {\n        System.out.println(a() && b());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ABfalse"
      },
      {
        "key": "B",
        "text": "Afalse"
      },
      {
        "key": "C",
        "text": "Bfalse"
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
      "summary": "正解はBです。`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
      "points": [
        "正解：B：Afalse",
        "正解になる理由：`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。ABfalse は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bfalse は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`&&` と `||` は短絡評価します。`&` と `|` はbooleanでも両辺を評価します。",
        "試験での注意：メソッド呼び出しの副作用が発生するかが問われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-047",
    "number": 47,
    "title": "switch文のフォールスルー #47",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 0;\n        switch (2) {\n            case 1: n++;\n            case 2: n++;\n            case 3: n++; break;\n            default: n++;\n        }\n        System.out.println(n);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
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
      "summary": "正解はBです。case 2から処理が始まり、breakまでcase 2とcase 3を実行します。nは2です。",
      "points": [
        "正解：B：2",
        "正解になる理由：case 2から処理が始まり、breakまでcase 2とcase 3を実行します。nは2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：switch文はbreakがないと次のcaseへ処理が流れます。",
        "試験での注意：switch式の `->` とは挙動が違います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-048",
    "number": 48,
    "title": "do-whileの実行回数 #48",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        do {\n            System.out.print(i);\n            i++;\n        } while (i < 0);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "0"
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
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。do-whileは条件判定が後なので、条件がfalseでも本体は1回実行されます。",
      "points": [
        "正解：B：0",
        "正解になる理由：do-whileは条件判定が後なので、条件がfalseでも本体は1回実行されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：while文とdo-while文の違いは最低実行回数です。",
        "試験での注意：条件式だけを見て「実行されない」と判断しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-049",
    "number": 49,
    "title": "thisと同名変数 #49",
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
    "id": "unit04-050",
    "number": 50,
    "title": "コンストラクタチェーン #50",
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
    "id": "unit04-051",
    "number": 51,
    "title": "recordのアクセサ #51",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public record Item(String name, int price) { }\nclass Main {\n    public static void main(String[] args) {\n        Item item = new Item(\"A\", 100);\n        System.out.println(item.name() + item.price());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A100"
      },
      {
        "key": "B",
        "text": "A,100"
      },
      {
        "key": "C",
        "text": "Item[A,100]"
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
      "summary": "正解はAです。recordはコンポーネント名と同じアクセサ `name()` と `price()` を自動生成します。",
      "points": [
        "正解：A：A100",
        "正解になる理由：recordはコンポーネント名と同じアクセサ `name()` と `price()` を自動生成します。",
        "誤答選択肢が誤りである理由：Bは誤りです。A,100 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Item[A,100] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordのアクセサはJavaBeans形式の `getName()` ではありません。",
        "試験での注意：recordではフィールドに直接アクセスせず、アクセサメソッドを使います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "class",
      "output"
    ]
  },
  {
    "id": "unit04-052",
    "number": 52,
    "title": "Stringの不変性 #52",
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
    "id": "unit04-053",
    "number": 53,
    "title": "参照の付け替え #53",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class Sample { int n; Sample(int n){ this.n = n; } }\npublic class Main {\n    public static void main(String[] args) {\n        Sample a = new Sample(1);\n        Sample b = a;\n        a = new Sample(1);\n        System.out.println(a == b);\n    }\n}"
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
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：参照型変数にはオブジェクトそのものではなく参照が入ります。",
        "試験での注意：フィールド値が同じでも、同じインスタンスとは限りません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "output"
    ]
  },
  {
    "id": "unit04-054",
    "number": 54,
    "title": "多次元配列の未初期化部分 #54",
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
    "id": "unit04-055",
    "number": 55,
    "title": "短絡評価 #55",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    static boolean a(){ System.out.print(\"A\"); return false; }\n    static boolean b(){ System.out.print(\"B\"); return true; }\n    public static void main(String[] args) {\n        System.out.println(a() && b());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ABfalse"
      },
      {
        "key": "B",
        "text": "Afalse"
      },
      {
        "key": "C",
        "text": "Bfalse"
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
      "summary": "正解はBです。`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
      "points": [
        "正解：B：Afalse",
        "正解になる理由：`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。ABfalse は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bfalse は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`&&` と `||` は短絡評価します。`&` と `|` はbooleanでも両辺を評価します。",
        "試験での注意：メソッド呼び出しの副作用が発生するかが問われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-056",
    "number": 56,
    "title": "switch文のフォールスルー #56",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 0;\n        switch (2) {\n            case 1: n++;\n            case 2: n++;\n            case 3: n++; break;\n            default: n++;\n        }\n        System.out.println(n);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
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
      "summary": "正解はBです。case 2から処理が始まり、breakまでcase 2とcase 3を実行します。nは2です。",
      "points": [
        "正解：B：2",
        "正解になる理由：case 2から処理が始まり、breakまでcase 2とcase 3を実行します。nは2です。",
        "誤答選択肢が誤りである理由：Aは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：switch文はbreakがないと次のcaseへ処理が流れます。",
        "試験での注意：switch式の `->` とは挙動が違います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-057",
    "number": 57,
    "title": "do-whileの実行回数 #57",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        do {\n            System.out.print(i);\n            i++;\n        } while (i < 0);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "0"
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
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。do-whileは条件判定が後なので、条件がfalseでも本体は1回実行されます。",
      "points": [
        "正解：B：0",
        "正解になる理由：do-whileは条件判定が後なので、条件がfalseでも本体は1回実行されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：while文とdo-while文の違いは最低実行回数です。",
        "試験での注意：条件式だけを見て「実行されない」と判断しないでください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "control",
      "output"
    ]
  },
  {
    "id": "unit04-058",
    "number": 58,
    "title": "thisと同名変数 #58",
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
    "id": "unit04-059",
    "number": 59,
    "title": "コンストラクタチェーン #59",
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
    "id": "unit04-060",
    "number": 60,
    "title": "recordのアクセサ #60",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public record Item(String name, int price) { }\nclass Main {\n    public static void main(String[] args) {\n        Item item = new Item(\"A\", 100);\n        System.out.println(item.name() + item.price());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A100"
      },
      {
        "key": "B",
        "text": "A,100"
      },
      {
        "key": "C",
        "text": "Item[A,100]"
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
      "summary": "正解はAです。recordはコンポーネント名と同じアクセサ `name()` と `price()` を自動生成します。",
      "points": [
        "正解：A：A100",
        "正解になる理由：recordはコンポーネント名と同じアクセサ `name()` と `price()` を自動生成します。",
        "誤答選択肢が誤りである理由：Bは誤りです。A,100 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Item[A,100] は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：recordのアクセサはJavaBeans形式の `getName()` ではありません。",
        "試験での注意：recordではフィールドに直接アクセスせず、アクセサメソッドを使います。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "class",
      "output"
    ]
  },
  {
    "id": "unit04-061",
    "number": 61,
    "title": "Stringの不変性 #61",
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
    "id": "unit04-062",
    "number": 62,
    "title": "参照の付け替え #62",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class Sample { int n; Sample(int n){ this.n = n; } }\npublic class Main {\n    public static void main(String[] args) {\n        Sample a = new Sample(1);\n        Sample b = a;\n        a = new Sample(1);\n        System.out.println(a == b);\n    }\n}"
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
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
      "points": [
        "正解：B：false",
        "正解になる理由：bは最初のインスタンスを参照したままです。aだけ新しいインスタンスを参照するため、`a == b` はfalseです。",
        "誤答選択肢が誤りである理由：Aは誤りです。true は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。1 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：参照型変数にはオブジェクトそのものではなく参照が入ります。",
        "試験での注意：フィールド値が同じでも、同じインスタンスとは限りません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "reference",
      "output"
    ]
  },
  {
    "id": "unit04-063",
    "number": 63,
    "title": "多次元配列の未初期化部分 #63",
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
    "id": "unit04-064",
    "number": 64,
    "title": "短絡評価 #64",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    static boolean a(){ System.out.print(\"A\"); return false; }\n    static boolean b(){ System.out.print(\"B\"); return true; }\n    public static void main(String[] args) {\n        System.out.println(a() && b());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "ABfalse"
      },
      {
        "key": "B",
        "text": "Afalse"
      },
      {
        "key": "C",
        "text": "Bfalse"
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
      "summary": "正解はBです。`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
      "points": [
        "正解：B：Afalse",
        "正解になる理由：`&&` は左辺がfalseの場合、右辺を評価しません。Aだけ出力され、その後falseが表示されます。",
        "誤答選択肢が誤りである理由：Aは誤りです。ABfalse は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bfalse は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`&&` と `||` は短絡評価します。`&` と `|` はbooleanでも両辺を評価します。",
        "試験での注意：メソッド呼び出しの副作用が発生するかが問われます。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "control",
      "output"
    ]
  }
];
