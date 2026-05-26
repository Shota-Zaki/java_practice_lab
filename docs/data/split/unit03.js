window.JAVA_STUDY_SPLIT = window.JAVA_STUDY_SPLIT || {};
window.JAVA_STUDY_SPLIT['unit03'] = [
  {
    "id": "unit03-001",
    "number": 1,
    "title": "複合代入と暗黙キャスト #1",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 2;\n        x += 3.5;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "5.5"
      },
      {
        "key": "C",
        "text": "6"
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
      "summary": "正解はAです。`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
      "points": [
        "正解：A：5",
        "正解になる理由：`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
        "誤答選択肢が誤りである理由：Bは誤りです。5.5 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。6 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：複合代入演算子は単純代入と完全に同じではありません。",
        "試験での注意：`x = x + 3.5` ならコンパイルエラーです。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "operator",
      "output"
    ]
  },
  {
    "id": "unit03-002",
    "number": 2,
    "title": "フィールド隠蔽とメソッド実行 #2",
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
    "id": "unit03-003",
    "number": 3,
    "title": "defaultメソッドの競合 #3",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "interface A { default void test(){ System.out.println(\"A\"); } }\ninterface B { default void test(){ System.out.println(\"B\"); } }\nclass C implements A, B { }"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Aが優先される"
      },
      {
        "key": "C",
        "text": "Bが優先される"
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
      "summary": "正解はDです。複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Aが優先される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bが優先される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`A.super.test()` のように特定インタフェースのdefault実装を呼べます。",
        "試験での注意：defaultメソッドは便利ですが、競合は自動解決されません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit03-004",
    "number": 4,
    "title": "sealedクラスの許可 #4",
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
    "id": "unit03-005",
    "number": 5,
    "title": "catchとfinally #5",
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
    "id": "unit03-006",
    "number": 6,
    "title": "チェック例外 #6",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.io.*;\npublic class Main {\n    static void read() throws IOException { throw new IOException(); }\n    public static void main(String[] args) {\n        read();\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "IOExceptionが捕捉される"
      },
      {
        "key": "C",
        "text": "実行時例外"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "nullが表示される"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。IOExceptionはチェック例外です。mainでcatchするかthrows宣言しなければコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：IOExceptionはチェック例外です。mainでcatchするかthrows宣言しなければコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。IOExceptionが捕捉される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。nullが表示される は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Exception直下の多くはチェック例外、RuntimeException配下は非チェック例外です。",
        "試験での注意：throws宣言が呼び出し側にも必要か確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit03-007",
    "number": 7,
    "title": "小さい整数型の演算 #7",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        short a = 10;\n        short b = 20;\n        short c = a + b;\n        System.out.println(c);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "1020"
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
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
        "誤答選択肢が誤りである理由：Aは誤りです。30 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。1020 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：byte、short、charは演算時にintへ昇格します。",
        "試験での注意：定数式の代入と、変数を含む式の代入を区別してください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit03-008",
    "number": 8,
    "title": "recordのequals #8",
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
    "id": "unit03-009",
    "number": 9,
    "title": "参照型配列の初期値 #9",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String[] a = new String[2];\n        System.out.println(a[0].length());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "2"
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
      "summary": "正解はEです。String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：プリミティブ配列と参照型配列では要素のデフォルト値が異なります。",
        "試験での注意：配列インスタンスがあることと、各要素にオブジェクトが入っていることは別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit03-010",
    "number": 10,
    "title": "複合代入と暗黙キャスト #10",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 2;\n        x += 3.5;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "5.5"
      },
      {
        "key": "C",
        "text": "6"
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
      "summary": "正解はAです。`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
      "points": [
        "正解：A：5",
        "正解になる理由：`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
        "誤答選択肢が誤りである理由：Bは誤りです。5.5 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。6 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：複合代入演算子は単純代入と完全に同じではありません。",
        "試験での注意：`x = x + 3.5` ならコンパイルエラーです。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "operator",
      "output"
    ]
  },
  {
    "id": "unit03-011",
    "number": 11,
    "title": "フィールド隠蔽とメソッド実行 #11",
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
    "id": "unit03-012",
    "number": 12,
    "title": "defaultメソッドの競合 #12",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "interface A { default void test(){ System.out.println(\"A\"); } }\ninterface B { default void test(){ System.out.println(\"B\"); } }\nclass C implements A, B { }"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Aが優先される"
      },
      {
        "key": "C",
        "text": "Bが優先される"
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
      "summary": "正解はDです。複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Aが優先される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bが優先される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`A.super.test()` のように特定インタフェースのdefault実装を呼べます。",
        "試験での注意：defaultメソッドは便利ですが、競合は自動解決されません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit03-013",
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
    "id": "unit03-014",
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
    "id": "unit03-015",
    "number": 15,
    "title": "チェック例外 #15",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.io.*;\npublic class Main {\n    static void read() throws IOException { throw new IOException(); }\n    public static void main(String[] args) {\n        read();\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "IOExceptionが捕捉される"
      },
      {
        "key": "C",
        "text": "実行時例外"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "nullが表示される"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。IOExceptionはチェック例外です。mainでcatchするかthrows宣言しなければコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：IOExceptionはチェック例外です。mainでcatchするかthrows宣言しなければコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。IOExceptionが捕捉される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。nullが表示される は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Exception直下の多くはチェック例外、RuntimeException配下は非チェック例外です。",
        "試験での注意：throws宣言が呼び出し側にも必要か確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit03-016",
    "number": 16,
    "title": "小さい整数型の演算 #16",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        short a = 10;\n        short b = 20;\n        short c = a + b;\n        System.out.println(c);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "1020"
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
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
        "誤答選択肢が誤りである理由：Aは誤りです。30 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。1020 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：byte、short、charは演算時にintへ昇格します。",
        "試験での注意：定数式の代入と、変数を含む式の代入を区別してください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit03-017",
    "number": 17,
    "title": "recordのequals #17",
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
    "id": "unit03-018",
    "number": 18,
    "title": "参照型配列の初期値 #18",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String[] a = new String[2];\n        System.out.println(a[0].length());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "2"
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
      "summary": "正解はEです。String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：プリミティブ配列と参照型配列では要素のデフォルト値が異なります。",
        "試験での注意：配列インスタンスがあることと、各要素にオブジェクトが入っていることは別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit03-019",
    "number": 19,
    "title": "複合代入と暗黙キャスト #19",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 2;\n        x += 3.5;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "5.5"
      },
      {
        "key": "C",
        "text": "6"
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
      "summary": "正解はAです。`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
      "points": [
        "正解：A：5",
        "正解になる理由：`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
        "誤答選択肢が誤りである理由：Bは誤りです。5.5 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。6 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：複合代入演算子は単純代入と完全に同じではありません。",
        "試験での注意：`x = x + 3.5` ならコンパイルエラーです。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "operator",
      "output"
    ]
  },
  {
    "id": "unit03-020",
    "number": 20,
    "title": "フィールド隠蔽とメソッド実行 #20",
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
    "id": "unit03-021",
    "number": 21,
    "title": "defaultメソッドの競合 #21",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "interface A { default void test(){ System.out.println(\"A\"); } }\ninterface B { default void test(){ System.out.println(\"B\"); } }\nclass C implements A, B { }"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Aが優先される"
      },
      {
        "key": "C",
        "text": "Bが優先される"
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
      "summary": "正解はDです。複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Aが優先される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bが優先される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`A.super.test()` のように特定インタフェースのdefault実装を呼べます。",
        "試験での注意：defaultメソッドは便利ですが、競合は自動解決されません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit03-022",
    "number": 22,
    "title": "sealedクラスの許可 #22",
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
    "id": "unit03-023",
    "number": 23,
    "title": "catchとfinally #23",
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
    "id": "unit03-024",
    "number": 24,
    "title": "チェック例外 #24",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.io.*;\npublic class Main {\n    static void read() throws IOException { throw new IOException(); }\n    public static void main(String[] args) {\n        read();\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "IOExceptionが捕捉される"
      },
      {
        "key": "C",
        "text": "実行時例外"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "nullが表示される"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。IOExceptionはチェック例外です。mainでcatchするかthrows宣言しなければコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：IOExceptionはチェック例外です。mainでcatchするかthrows宣言しなければコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。IOExceptionが捕捉される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。nullが表示される は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Exception直下の多くはチェック例外、RuntimeException配下は非チェック例外です。",
        "試験での注意：throws宣言が呼び出し側にも必要か確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit03-025",
    "number": 25,
    "title": "小さい整数型の演算 #25",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        short a = 10;\n        short b = 20;\n        short c = a + b;\n        System.out.println(c);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "1020"
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
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
        "誤答選択肢が誤りである理由：Aは誤りです。30 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。1020 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：byte、short、charは演算時にintへ昇格します。",
        "試験での注意：定数式の代入と、変数を含む式の代入を区別してください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit03-026",
    "number": 26,
    "title": "recordのequals #26",
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
    "id": "unit03-027",
    "number": 27,
    "title": "参照型配列の初期値 #27",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String[] a = new String[2];\n        System.out.println(a[0].length());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "2"
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
      "summary": "正解はEです。String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：プリミティブ配列と参照型配列では要素のデフォルト値が異なります。",
        "試験での注意：配列インスタンスがあることと、各要素にオブジェクトが入っていることは別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit03-028",
    "number": 28,
    "title": "複合代入と暗黙キャスト #28",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 2;\n        x += 3.5;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "5.5"
      },
      {
        "key": "C",
        "text": "6"
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
      "summary": "正解はAです。`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
      "points": [
        "正解：A：5",
        "正解になる理由：`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
        "誤答選択肢が誤りである理由：Bは誤りです。5.5 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。6 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：複合代入演算子は単純代入と完全に同じではありません。",
        "試験での注意：`x = x + 3.5` ならコンパイルエラーです。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "operator",
      "output"
    ]
  },
  {
    "id": "unit03-029",
    "number": 29,
    "title": "フィールド隠蔽とメソッド実行 #29",
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
    "id": "unit03-030",
    "number": 30,
    "title": "defaultメソッドの競合 #30",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "interface A { default void test(){ System.out.println(\"A\"); } }\ninterface B { default void test(){ System.out.println(\"B\"); } }\nclass C implements A, B { }"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Aが優先される"
      },
      {
        "key": "C",
        "text": "Bが優先される"
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
      "summary": "正解はDです。複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Aが優先される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bが優先される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`A.super.test()` のように特定インタフェースのdefault実装を呼べます。",
        "試験での注意：defaultメソッドは便利ですが、競合は自動解決されません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit03-031",
    "number": 31,
    "title": "sealedクラスの許可 #31",
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
    "id": "unit03-032",
    "number": 32,
    "title": "catchとfinally #32",
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
    "id": "unit03-033",
    "number": 33,
    "title": "チェック例外 #33",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.io.*;\npublic class Main {\n    static void read() throws IOException { throw new IOException(); }\n    public static void main(String[] args) {\n        read();\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "IOExceptionが捕捉される"
      },
      {
        "key": "C",
        "text": "実行時例外"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "nullが表示される"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。IOExceptionはチェック例外です。mainでcatchするかthrows宣言しなければコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：IOExceptionはチェック例外です。mainでcatchするかthrows宣言しなければコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。IOExceptionが捕捉される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。nullが表示される は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Exception直下の多くはチェック例外、RuntimeException配下は非チェック例外です。",
        "試験での注意：throws宣言が呼び出し側にも必要か確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit03-034",
    "number": 34,
    "title": "小さい整数型の演算 #34",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        short a = 10;\n        short b = 20;\n        short c = a + b;\n        System.out.println(c);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "1020"
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
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
        "誤答選択肢が誤りである理由：Aは誤りです。30 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。1020 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：byte、short、charは演算時にintへ昇格します。",
        "試験での注意：定数式の代入と、変数を含む式の代入を区別してください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit03-035",
    "number": 35,
    "title": "recordのequals #35",
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
    "id": "unit03-036",
    "number": 36,
    "title": "参照型配列の初期値 #36",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String[] a = new String[2];\n        System.out.println(a[0].length());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "2"
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
      "summary": "正解はEです。String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：プリミティブ配列と参照型配列では要素のデフォルト値が異なります。",
        "試験での注意：配列インスタンスがあることと、各要素にオブジェクトが入っていることは別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit03-037",
    "number": 37,
    "title": "複合代入と暗黙キャスト #37",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 2;\n        x += 3.5;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "5.5"
      },
      {
        "key": "C",
        "text": "6"
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
      "summary": "正解はAです。`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
      "points": [
        "正解：A：5",
        "正解になる理由：`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
        "誤答選択肢が誤りである理由：Bは誤りです。5.5 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。6 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：複合代入演算子は単純代入と完全に同じではありません。",
        "試験での注意：`x = x + 3.5` ならコンパイルエラーです。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "operator",
      "output"
    ]
  },
  {
    "id": "unit03-038",
    "number": 38,
    "title": "フィールド隠蔽とメソッド実行 #38",
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
    "id": "unit03-039",
    "number": 39,
    "title": "defaultメソッドの競合 #39",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "interface A { default void test(){ System.out.println(\"A\"); } }\ninterface B { default void test(){ System.out.println(\"B\"); } }\nclass C implements A, B { }"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Aが優先される"
      },
      {
        "key": "C",
        "text": "Bが優先される"
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
      "summary": "正解はDです。複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Aが優先される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bが優先される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`A.super.test()` のように特定インタフェースのdefault実装を呼べます。",
        "試験での注意：defaultメソッドは便利ですが、競合は自動解決されません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit03-040",
    "number": 40,
    "title": "sealedクラスの許可 #40",
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
    "id": "unit03-041",
    "number": 41,
    "title": "catchとfinally #41",
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
    "id": "unit03-042",
    "number": 42,
    "title": "チェック例外 #42",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.io.*;\npublic class Main {\n    static void read() throws IOException { throw new IOException(); }\n    public static void main(String[] args) {\n        read();\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "IOExceptionが捕捉される"
      },
      {
        "key": "C",
        "text": "実行時例外"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "nullが表示される"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。IOExceptionはチェック例外です。mainでcatchするかthrows宣言しなければコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：IOExceptionはチェック例外です。mainでcatchするかthrows宣言しなければコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。IOExceptionが捕捉される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。nullが表示される は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Exception直下の多くはチェック例外、RuntimeException配下は非チェック例外です。",
        "試験での注意：throws宣言が呼び出し側にも必要か確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit03-043",
    "number": 43,
    "title": "小さい整数型の演算 #43",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        short a = 10;\n        short b = 20;\n        short c = a + b;\n        System.out.println(c);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "1020"
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
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
        "誤答選択肢が誤りである理由：Aは誤りです。30 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。1020 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：byte、short、charは演算時にintへ昇格します。",
        "試験での注意：定数式の代入と、変数を含む式の代入を区別してください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit03-044",
    "number": 44,
    "title": "recordのequals #44",
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
    "id": "unit03-045",
    "number": 45,
    "title": "参照型配列の初期値 #45",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String[] a = new String[2];\n        System.out.println(a[0].length());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "2"
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
      "summary": "正解はEです。String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：プリミティブ配列と参照型配列では要素のデフォルト値が異なります。",
        "試験での注意：配列インスタンスがあることと、各要素にオブジェクトが入っていることは別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit03-046",
    "number": 46,
    "title": "複合代入と暗黙キャスト #46",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 2;\n        x += 3.5;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "5.5"
      },
      {
        "key": "C",
        "text": "6"
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
      "summary": "正解はAです。`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
      "points": [
        "正解：A：5",
        "正解になる理由：`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
        "誤答選択肢が誤りである理由：Bは誤りです。5.5 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。6 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：複合代入演算子は単純代入と完全に同じではありません。",
        "試験での注意：`x = x + 3.5` ならコンパイルエラーです。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "operator",
      "output"
    ]
  },
  {
    "id": "unit03-047",
    "number": 47,
    "title": "フィールド隠蔽とメソッド実行 #47",
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
    "id": "unit03-048",
    "number": 48,
    "title": "defaultメソッドの競合 #48",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "interface A { default void test(){ System.out.println(\"A\"); } }\ninterface B { default void test(){ System.out.println(\"B\"); } }\nclass C implements A, B { }"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Aが優先される"
      },
      {
        "key": "C",
        "text": "Bが優先される"
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
      "summary": "正解はDです。複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Aが優先される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bが優先される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`A.super.test()` のように特定インタフェースのdefault実装を呼べます。",
        "試験での注意：defaultメソッドは便利ですが、競合は自動解決されません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit03-049",
    "number": 49,
    "title": "sealedクラスの許可 #49",
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
    "id": "unit03-050",
    "number": 50,
    "title": "catchとfinally #50",
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
    "id": "unit03-051",
    "number": 51,
    "title": "チェック例外 #51",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.io.*;\npublic class Main {\n    static void read() throws IOException { throw new IOException(); }\n    public static void main(String[] args) {\n        read();\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "IOExceptionが捕捉される"
      },
      {
        "key": "C",
        "text": "実行時例外"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "nullが表示される"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。IOExceptionはチェック例外です。mainでcatchするかthrows宣言しなければコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：IOExceptionはチェック例外です。mainでcatchするかthrows宣言しなければコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。IOExceptionが捕捉される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。nullが表示される は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Exception直下の多くはチェック例外、RuntimeException配下は非チェック例外です。",
        "試験での注意：throws宣言が呼び出し側にも必要か確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit03-052",
    "number": 52,
    "title": "小さい整数型の演算 #52",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        short a = 10;\n        short b = 20;\n        short c = a + b;\n        System.out.println(c);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "1020"
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
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
        "誤答選択肢が誤りである理由：Aは誤りです。30 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。1020 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：byte、short、charは演算時にintへ昇格します。",
        "試験での注意：定数式の代入と、変数を含む式の代入を区別してください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit03-053",
    "number": 53,
    "title": "recordのequals #53",
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
    "id": "unit03-054",
    "number": 54,
    "title": "参照型配列の初期値 #54",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String[] a = new String[2];\n        System.out.println(a[0].length());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "2"
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
      "summary": "正解はEです。String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：プリミティブ配列と参照型配列では要素のデフォルト値が異なります。",
        "試験での注意：配列インスタンスがあることと、各要素にオブジェクトが入っていることは別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit03-055",
    "number": 55,
    "title": "複合代入と暗黙キャスト #55",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 2;\n        x += 3.5;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "5.5"
      },
      {
        "key": "C",
        "text": "6"
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
      "summary": "正解はAです。`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
      "points": [
        "正解：A：5",
        "正解になる理由：`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
        "誤答選択肢が誤りである理由：Bは誤りです。5.5 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。6 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：複合代入演算子は単純代入と完全に同じではありません。",
        "試験での注意：`x = x + 3.5` ならコンパイルエラーです。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "operator",
      "output"
    ]
  },
  {
    "id": "unit03-056",
    "number": 56,
    "title": "フィールド隠蔽とメソッド実行 #56",
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
    "id": "unit03-057",
    "number": 57,
    "title": "defaultメソッドの競合 #57",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "interface A { default void test(){ System.out.println(\"A\"); } }\ninterface B { default void test(){ System.out.println(\"B\"); } }\nclass C implements A, B { }"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Aが優先される"
      },
      {
        "key": "C",
        "text": "Bが優先される"
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
      "summary": "正解はDです。複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Aが優先される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bが優先される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`A.super.test()` のように特定インタフェースのdefault実装を呼べます。",
        "試験での注意：defaultメソッドは便利ですが、競合は自動解決されません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit03-058",
    "number": 58,
    "title": "sealedクラスの許可 #58",
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
    "id": "unit03-059",
    "number": 59,
    "title": "catchとfinally #59",
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
    "id": "unit03-060",
    "number": 60,
    "title": "チェック例外 #60",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.io.*;\npublic class Main {\n    static void read() throws IOException { throw new IOException(); }\n    public static void main(String[] args) {\n        read();\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "何も表示されない"
      },
      {
        "key": "B",
        "text": "IOExceptionが捕捉される"
      },
      {
        "key": "C",
        "text": "実行時例外"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "nullが表示される"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。IOExceptionはチェック例外です。mainでcatchするかthrows宣言しなければコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：IOExceptionはチェック例外です。mainでcatchするかthrows宣言しなければコンパイルエラーです。",
        "誤答選択肢が誤りである理由：Aは誤りです。何も表示されない は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。IOExceptionが捕捉される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。nullが表示される は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：Exception直下の多くはチェック例外、RuntimeException配下は非チェック例外です。",
        "試験での注意：throws宣言が呼び出し側にも必要か確認します。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit03-061",
    "number": 61,
    "title": "小さい整数型の演算 #61",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        short a = 10;\n        short b = 20;\n        short c = a + b;\n        System.out.println(c);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "1020"
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
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`short + short` は数値昇格によりintになります。intをshortへ暗黙代入できません。",
        "誤答選択肢が誤りである理由：Aは誤りです。30 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。1020 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：byte、short、charは演算時にintへ昇格します。",
        "試験での注意：定数式の代入と、変数を含む式の代入を区別してください。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "compile"
    ]
  },
  {
    "id": "unit03-062",
    "number": 62,
    "title": "recordのequals #62",
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
    "id": "unit03-063",
    "number": 63,
    "title": "参照型配列の初期値 #63",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String[] a = new String[2];\n        System.out.println(a[0].length());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "2"
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
      "summary": "正解はEです。String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：String配列の要素はnullで初期化されます。`a[0].length()` でNullPointerExceptionが発生します。",
        "誤答選択肢が誤りである理由：Aは誤りです。0 は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。null は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。2 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：プリミティブ配列と参照型配列では要素のデフォルト値が異なります。",
        "試験での注意：配列インスタンスがあることと、各要素にオブジェクトが入っていることは別です。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "array",
      "runtime"
    ]
  },
  {
    "id": "unit03-064",
    "number": 64,
    "title": "複合代入と暗黙キャスト #64",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 2;\n        x += 3.5;\n        System.out.println(x);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "5.5"
      },
      {
        "key": "C",
        "text": "6"
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
      "summary": "正解はAです。`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
      "points": [
        "正解：A：5",
        "正解になる理由：`+=` は暗黙のキャストを含み、`x = (int)(x + 3.5)` 相当になります。結果は5です。",
        "誤答選択肢が誤りである理由：Bは誤りです。5.5 は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。6 は、コード上の型・実行順・例外条件と一致しません。 Dは誤りです。コンパイルエラー は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：複合代入演算子は単純代入と完全に同じではありません。",
        "試験での注意：`x = x + 3.5` ならコンパイルエラーです。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "type",
      "operator",
      "output"
    ]
  },
  {
    "id": "unit03-065",
    "number": 65,
    "title": "フィールド隠蔽とメソッド実行 #65",
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
    "id": "unit03-066",
    "number": 66,
    "title": "defaultメソッドの競合 #66",
    "type": "single",
    "selectCount": 1,
    "difficulty": "standard",
    "prompt": "次のコードについて正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "interface A { default void test(){ System.out.println(\"A\"); } }\ninterface B { default void test(){ System.out.println(\"B\"); } }\nclass C implements A, B { }"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正しくコンパイルできる"
      },
      {
        "key": "B",
        "text": "Aが優先される"
      },
      {
        "key": "C",
        "text": "Bが優先される"
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
      "summary": "正解はDです。複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：複数インタフェースから同じシグニチャのdefaultメソッドを継承しているため、Cで明示的に解決する必要があります。",
        "誤答選択肢が誤りである理由：Aは誤りです。正しくコンパイルできる は、コード上の型・実行順・例外条件と一致しません。 Bは誤りです。Aが優先される は、コード上の型・実行順・例外条件と一致しません。 Cは誤りです。Bが優先される は、コード上の型・実行順・例外条件と一致しません。 Eは誤りです。実行時例外 は、コード上の型・実行順・例外条件と一致しません。",
        "関連知識：`A.super.test()` のように特定インタフェースのdefault実装を呼べます。",
        "試験での注意：defaultメソッドは便利ですが、競合は自動解決されません。"
      ]
    },
    "source": "公開向けAI生成オリジナル問題（Java Silver本番形式寄せ）",
    "tags": [
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit03-067",
    "number": 67,
    "title": "sealedクラスの許可 #67",
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
  }
];
