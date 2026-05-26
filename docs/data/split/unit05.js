window.JAVA_STUDY_SPLIT = window.JAVA_STUDY_SPLIT || {};
window.JAVA_STUDY_SPLIT['unit05'] = [
  {
    "id": "unit05-001",
    "number": 1,
    "title": "thisと同名変数 #1",
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
    "id": "unit05-002",
    "number": 2,
    "title": "コンストラクタチェーン #2",
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
    "id": "unit05-003",
    "number": 3,
    "title": "recordのアクセサ #3",
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
    "id": "unit05-004",
    "number": 4,
    "title": "短絡評価 #4",
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
    "id": "unit05-005",
    "number": 5,
    "title": "switch文のフォールスルー #5",
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
    "id": "unit05-006",
    "number": 6,
    "title": "前置後置インクリメント #6",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 1;\n        System.out.println(x++ + ++x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
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
      "summary": "正解はBです。`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
      "points": [
        "正解：B：4",
        "正解になる理由：`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
        "誤答選択肢が誤りである理由：Aは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。5 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：後置は使用後に増加、前置は増加後に使用です。",
        "試験での注意：最終的なxの値と、式に使われる値は別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "output"
    ]
  },
  {
    "id": "unit05-007",
    "number": 7,
    "title": "StringBuilderのequals #7",
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
    "id": "unit05-008",
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
    "id": "unit05-009",
    "number": 9,
    "title": "thisと同名変数 #9",
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
    "id": "unit05-010",
    "number": 10,
    "title": "コンストラクタチェーン #10",
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
    "id": "unit05-011",
    "number": 11,
    "title": "recordのアクセサ #11",
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
    "id": "unit05-012",
    "number": 12,
    "title": "短絡評価 #12",
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
    "id": "unit05-013",
    "number": 13,
    "title": "switch文のフォールスルー #13",
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
    "id": "unit05-014",
    "number": 14,
    "title": "前置後置インクリメント #14",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 1;\n        System.out.println(x++ + ++x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
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
      "summary": "正解はBです。`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
      "points": [
        "正解：B：4",
        "正解になる理由：`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
        "誤答選択肢が誤りである理由：Aは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。5 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：後置は使用後に増加、前置は増加後に使用です。",
        "試験での注意：最終的なxの値と、式に使われる値は別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "output"
    ]
  },
  {
    "id": "unit05-015",
    "number": 15,
    "title": "StringBuilderのequals #15",
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
    "id": "unit05-016",
    "number": 16,
    "title": "参照の付け替え #16",
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
    "id": "unit05-017",
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
    "id": "unit05-018",
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
    "id": "unit05-019",
    "number": 19,
    "title": "recordのアクセサ #19",
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
    "id": "unit05-020",
    "number": 20,
    "title": "短絡評価 #20",
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
    "id": "unit05-021",
    "number": 21,
    "title": "switch文のフォールスルー #21",
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
    "id": "unit05-022",
    "number": 22,
    "title": "前置後置インクリメント #22",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 1;\n        System.out.println(x++ + ++x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
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
      "summary": "正解はBです。`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
      "points": [
        "正解：B：4",
        "正解になる理由：`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
        "誤答選択肢が誤りである理由：Aは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。5 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：後置は使用後に増加、前置は増加後に使用です。",
        "試験での注意：最終的なxの値と、式に使われる値は別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "output"
    ]
  },
  {
    "id": "unit05-023",
    "number": 23,
    "title": "StringBuilderのequals #23",
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
    "id": "unit05-024",
    "number": 24,
    "title": "参照の付け替え #24",
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
    "id": "unit05-025",
    "number": 25,
    "title": "thisと同名変数 #25",
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
    "id": "unit05-026",
    "number": 26,
    "title": "コンストラクタチェーン #26",
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
    "id": "unit05-027",
    "number": 27,
    "title": "recordのアクセサ #27",
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
    "id": "unit05-028",
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
    "id": "unit05-029",
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
    "id": "unit05-030",
    "number": 30,
    "title": "前置後置インクリメント #30",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 1;\n        System.out.println(x++ + ++x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
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
      "summary": "正解はBです。`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
      "points": [
        "正解：B：4",
        "正解になる理由：`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
        "誤答選択肢が誤りである理由：Aは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。5 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：後置は使用後に増加、前置は増加後に使用です。",
        "試験での注意：最終的なxの値と、式に使われる値は別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "output"
    ]
  },
  {
    "id": "unit05-031",
    "number": 31,
    "title": "StringBuilderのequals #31",
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
    "id": "unit05-032",
    "number": 32,
    "title": "参照の付け替え #32",
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
    "id": "unit05-033",
    "number": 33,
    "title": "thisと同名変数 #33",
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
    "id": "unit05-034",
    "number": 34,
    "title": "コンストラクタチェーン #34",
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
    "id": "unit05-035",
    "number": 35,
    "title": "recordのアクセサ #35",
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
    "id": "unit05-036",
    "number": 36,
    "title": "短絡評価 #36",
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
    "id": "unit05-037",
    "number": 37,
    "title": "switch文のフォールスルー #37",
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
    "id": "unit05-038",
    "number": 38,
    "title": "前置後置インクリメント #38",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 1;\n        System.out.println(x++ + ++x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
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
      "summary": "正解はBです。`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
      "points": [
        "正解：B：4",
        "正解になる理由：`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
        "誤答選択肢が誤りである理由：Aは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。5 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：後置は使用後に増加、前置は増加後に使用です。",
        "試験での注意：最終的なxの値と、式に使われる値は別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "output"
    ]
  },
  {
    "id": "unit05-039",
    "number": 39,
    "title": "StringBuilderのequals #39",
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
    "id": "unit05-040",
    "number": 40,
    "title": "参照の付け替え #40",
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
    "id": "unit05-041",
    "number": 41,
    "title": "thisと同名変数 #41",
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
    "id": "unit05-042",
    "number": 42,
    "title": "コンストラクタチェーン #42",
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
    "id": "unit05-043",
    "number": 43,
    "title": "recordのアクセサ #43",
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
    "id": "unit05-044",
    "number": 44,
    "title": "短絡評価 #44",
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
    "id": "unit05-045",
    "number": 45,
    "title": "switch文のフォールスルー #45",
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
    "id": "unit05-046",
    "number": 46,
    "title": "前置後置インクリメント #46",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 1;\n        System.out.println(x++ + ++x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
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
      "summary": "正解はBです。`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
      "points": [
        "正解：B：4",
        "正解になる理由：`x++` は1を返してからxを2にします。`++x` は3にしてから3を返すため、合計は4です。",
        "誤答選択肢が誤りである理由：Aは誤りです。3 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。5 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：後置は使用後に増加、前置は増加後に使用です。",
        "試験での注意：最終的なxの値と、式に使われる値は別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "operator",
      "output"
    ]
  },
  {
    "id": "unit05-047",
    "number": 47,
    "title": "StringBuilderのequals #47",
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
    "id": "unit05-048",
    "number": 48,
    "title": "参照の付け替え #48",
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
    "id": "unit05-049",
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
    "id": "unit05-050",
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
  }
];
