package cn.sw.study.common.test.nio;

import java.io.*;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.net.UnknownHostException;
import java.nio.ByteBuffer;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;
import java.util.Iterator;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;


public class NIOFileTransClient {
    public static final int PORT = 21213;//端口号
    //发送缓冲和接收缓冲区大小
    public static final int BUFFER_SIZE = 1024 * 1024;

    public static void main(String[] args) throws IOException {
        new NIOFileTransClient().client();
    }

    public void client() throws UnknownHostException, IOException {
        //文件要输出的位置
        OutputStream out = new FileOutputStream(new File("F:/12-1.jpg"));
        Socket socket = new Socket("localhost", PORT);
        //获取文件输入流（网络服务器）
        InputStream in = socket.getInputStream();
        //获取网络服务器的输入流（客户端的输出流，用于输出想要获取的文件名）
        OutputStream socketOut = socket.getOutputStream();
        //写出需要读取的文件名
        socketOut.write("F:/12.jpg".getBytes());
        socketOut.write(new byte[]{-1});//输出终止符
        byte[] buffer = new byte[BUFFER_SIZE];//新创建一个读入缓冲区
        int i = 0;
        while (true) {
            i = in.read(buffer);//从网络读入数据
            if (i == -1)//读取到文件末尾
                break;
            out.write(buffer, 0, i);//向文件中写出
        }
        socket.close();//关闭套接字
        out.close();//关闭文件
    }
}

