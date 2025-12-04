public String scrambleWord(String toScramble) {
    if (toScramble == null || toScramble.length() <= 1) return toScramble;

    char[] arr = toScramble.toCharArray();
    Random rnd = new Random();

    for (int i = arr.length - 1; i > 0; i--) {
        int j = rnd.nextInt(i + 1); // 0..i
        char tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return new String(arr);
}